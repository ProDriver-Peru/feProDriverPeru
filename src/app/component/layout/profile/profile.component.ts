import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/User';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Driver } from 'src/model/Driver';
import { DriverService } from 'src/app/service/driver.service';
import { Employer } from 'src/model/Employer';
import { EmployerService } from 'src/app/service/employer.service';
import { NotifyComponent } from './notify/notify.component';
import { MatDialog } from '@angular/material/dialog';
import { Notification } from 'src/model/Notification';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public user: User = JSON.parse(localStorage.getItem('userLogged') || '{}');
  public driver = new Driver();
  public employer = new Employer();
  public notification = new Notification();

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router,
    public driverService: DriverService,
    public employerService: EmployerService,
    public notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (this.user.rol == 'driver') {
        this.employerService
          .getEmployerById(parseInt(params['id']))
          .subscribe((data) => {
            this.employer = data;
          });
      } else if (this.user.rol == 'employer') {
        this.driverService
          .getDriverById(parseInt(params['id']))
          .subscribe((data) => {
            this.driver = data;
          });
      }
    });
  }

  calculateAge(birthday: string) {
    let birthdayDate = new Date(birthday);
    let ageDifMs = Date.now() - birthdayDate.getTime();
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  openDialogNotify() {
    this.notification.idUserEmployer = new Employer();
    this.notification.idUserDriver= new Driver();

    this.notification.idUserEmployer.id = this.employer.id;
    this.notification.idUserDriver.id = this.driver.id;

    //this.notification.timestamp = new Date();

    this.dialog
      .open(NotifyComponent)
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.notification.content = result;
          this.notificationService
            .postNotification(this.notification)
            .subscribe((data) => {
              this.router.navigate(['/home']);
            });
        }
      });
  }
}
