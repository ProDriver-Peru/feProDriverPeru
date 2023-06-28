import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Notification } from 'src/model/Notification';
import { Observable } from 'rxjs';

const baseUrl = environment.base;

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

    private urlNotification = `${baseUrl}/notification`;

    constructor(private http:HttpClient) { }

    getListNotificationByIdEmployer(idEmployer: number):Observable<any>{
      return this.http.get<Notification[]>(`${this.urlNotification}/idEmployer/${idEmployer}`);
    }

    postOffer(notification:Notification):Observable<any>{
      return this.http.post<Notification>(this.urlNotification, notification);
    }

}
