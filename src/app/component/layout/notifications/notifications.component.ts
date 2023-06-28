import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/service/notification.service';
import { Notification } from 'src/model/Notification';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
})
export class NotificationsComponent implements OnInit {
  notifications: Notification[];

  constructor(private notificationService: NotificationService) {}
  ngOnInit(): void {
    this.notificationService
      .getListNotificationByIdEmployer(0)
      .subscribe((data) => {
        this.notifications = data;
        console.log('data: '+data);

      });
  }
}
