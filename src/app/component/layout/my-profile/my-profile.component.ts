import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/User';
import { Driver } from 'src/model/Driver';
import { DriverService } from 'src/app/service/driver.service';
import { Employer } from 'src/model/Employer';
import { EmployerService } from 'src/app/service/employer.service';
import { MatDialog } from '@angular/material/dialog';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
})
export class MyProfileComponent implements OnInit {
  user: User = JSON.parse(localStorage.getItem('userLogged') || '{}');
  driver: Driver = new Driver();
  employer: Employer = new Employer();
  constructor(
    private driverService: DriverService,
    private employerService: EmployerService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (this.user.rol == 'driver') {
      this.driverService.getDriverById(this.user.id).subscribe((data) => {
        this.driver = data;
      });
    } else if (this.user.rol == 'employer') {
      this.employerService.getEmployerById(this.user.id).subscribe((data) => {
        this.employer = data;
      });
    }
  }

  calculateAge(birthday: string) {
    let birthdayDate = new Date(birthday);
    let ageDifMs = Date.now() - birthdayDate.getTime();
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  openDialogEdit() {
    this.dialog.open(ProfileEditComponent).afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }
}
