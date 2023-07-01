import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Employer } from 'src/model/Employer';
import { Observable } from 'rxjs';

const baseUrl = environment.base;

@Injectable({
  providedIn: 'root',
})
export class EmployerService {
  private urlEmployer = `${baseUrl}/employer`;
  constructor(private http: HttpClient) {}

  getListEmployers(): Observable<any> {
    return this.http.get<Employer[]>(this.urlEmployer);
  }

  getEmployerById(id: number): Observable<any> {
    return this.http.get<Employer>(this.urlEmployer + '/' + id);
  }
  updateEmployer(employer: Employer): Observable<any> {
    return this.http.put<Employer>(this.urlEmployer + '/' + employer.id, employer);
  }

  registerEmployer(employer: Employer): Observable<any> {
    employer.user.rol = 'employer';
    employer.user.description = 'active';
    if (employer.user.imageProfile == null || employer.user.imageProfile == '')
    employer.user.imageProfile = 'https://i.imgur.com/tdi3NGa.png';
    if (employer.imageCompany == null || employer.imageCompany == '')
    employer.imageCompany = 'https://i.imgur.com/tdi3NGa.png'
    console.log(employer);
    return this.http.post<Employer>(this.urlEmployer, employer);
  }
}
