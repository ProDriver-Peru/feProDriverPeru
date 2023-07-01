import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/service/notification.service';
import { Notification } from 'src/model/Notification';
import { User } from 'src/model/User';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
})
export class NotificationsComponent implements OnInit {
  user: User = JSON.parse(localStorage.getItem('userLogged') || '{}');
  notifications: Notification[];

  constructor(private notificationService: NotificationService) {}
  ngOnInit(): void {
    if (this.user.rol == 'employer') {
      this.notificationService
        .getListNotificationByIdEmployer(this.user.id)
        .subscribe((data) => {
          this.notifications = data;
          console.log('data: ' + data);
        });
    } else if (this.user.rol == 'driver') {
      this.notificationService
        .getListNotificationByIdDriver(this.user.id)
        .subscribe((data) => {
          this.notifications = data;
          console.log('data: ' + data);
        });
    }
  }
}
