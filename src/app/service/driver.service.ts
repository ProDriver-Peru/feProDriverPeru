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

  getDriverById(id: number): Observable<any> {
    return this.http.get<Driver>(this.urlDriver + '/' + id);
  }

  login(email: string, password: string): Observable<any> {
    let user: User = new User();
    user.email = email;
    user.password = password;
    return this.http.post<User>(environment.base + '/sign-in', user);
  }
  updateDriver(driver: Driver): Observable<any> {
    if (driver.user.imageProfile == null || driver.user.imageProfile == '')
      driver.user.imageProfile = 'https://i.imgur.com/tdi3NGa.png';
    return this.http.put<Driver>(this.urlDriver + '/' + driver.id, driver);
  }
  getListDriversByLicenseType(licenseType: string): Observable<any> {
    return this.http.get<Driver[]>(
      this.urlDriver + '/licenseType/' + licenseType
    );
  }

  registerDriver(driver: Driver): Observable<any> {
    driver.employed = false;
    driver.user.rol = 'driver';
    if (driver.user.imageProfile == null || driver.user.imageProfile == '')
      driver.user.imageProfile = 'https://i.imgur.com/tdi3NGa.png';

    return this.http.post<Driver>(this.urlDriver, driver);
  }
}
