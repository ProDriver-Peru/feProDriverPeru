import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Driver } from 'src/model/Driver';
import { Observable } from 'rxjs';
import { User } from 'src/model/User';

const baseUrl = environment.base;

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  private urlDriver = `${baseUrl}/driver`;
  constructor(private http: HttpClient) {}

  getListDrivers(): Observable<any> {
    return this.http.get<Driver[]>(this.urlDriver);
  }
  insertDriver(driver: Driver): Observable<any> {
    return this.http.post<Driver>(this.urlDriver, driver);
  }
  getDriverById(id: number): Observable<any> {
    return this.http.get<Driver>(this.urlDriver + '/' + id);
  }

  login(email: string, password: string): Observable<any> {
    let user: User = new User();
    user.email = email;
    user.password = password;
    return this.http.post<User>(environment.base + '/sign-in', user);
  }

  registerDriver(driver: Driver): Observable<any> {
    driver.employed = false;
    driver.user.rol = 'driver';

    console.log(driver);

    return this.http.post<Driver>(this.urlDriver, driver);
  }
}
