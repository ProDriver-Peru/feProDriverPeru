import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { User } from 'src/model/User';
import { Observable } from 'rxjs';

const baseUrl = environment.base;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlAuth = `${baseUrl}/auth`;

  constructor(private http:HttpClient) { }

  checkLogin (email: string, password: string):boolean{
    let user: User = new User();
    user.email= email;
    user.password = password;
    return true;
  }
  register(user: User){
    return this.http.post<User[]>(this.urlAuth,user);
  }


}
