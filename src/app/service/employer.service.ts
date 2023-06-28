import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Employer } from 'src/model/Employer';
import { Observable } from 'rxjs';

const baseUrl = environment.base;

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

    private urlEmployer = `${baseUrl}/employer`;
    constructor(private http:HttpClient) { }

    getListEmployers():Observable<any>{
      return this.http.get<Employer[]>(this.urlEmployer);
    }
    insertEmployer(employer:Employer):Observable<any>{
      return this.http.post<Employer>(this.urlEmployer,employer);
    }
    registerEmployer(employer:Employer):Observable<any>{
      employer.id=0;
      employer.user.plan="sharky";
      employer.user.description="description";
      employer.user.imageProfile="https://i.imgur.com/tdi3NGa.png";
      return this.http.post<Employer>(this.urlEmployer,employer);
    }
}
