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

}
