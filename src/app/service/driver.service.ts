import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Driver } from 'src/model/Driver';
import { Observable } from 'rxjs';

const baseUrl = environment.base;

@Injectable({
  providedIn: 'root'
})
export class DriverService {

    private urlDriver = `${baseUrl}/driver`;
    constructor(private http:HttpClient) { }

    getListDrivers():Observable<any>{
      return this.http.get<Driver[]>(this.urlDriver);
    }
    insertDriver(driver:Driver):Observable<any>{
      return this.http.post<Driver>(this.urlDriver,driver);
    }
    registerDriver(driver:Driver):Observable<any>{
      driver.id=0;
      driver.employed=false;
      driver.user.role="driver";
      driver.user.plan="free";
      driver.user.description="description";
      driver.user.imageProfile="https://i.imgur.com/tdi3NGa.png";
      return this.http.post<Driver>(this.urlDriver,driver);
    }

}
