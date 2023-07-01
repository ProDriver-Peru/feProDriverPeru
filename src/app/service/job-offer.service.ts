import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Employer } from 'src/model/Employer';
import { Observable } from 'rxjs';
import { JobOffer } from 'src/model/JobOffer';

const baseUrl = environment.base;

@Injectable({
  providedIn: 'root',
})
export class JobOfferService {
  private urlJobOffer = `${baseUrl}/jobOffer`;
  constructor(private http: HttpClient) {}

  getListJobOffers(): Observable<any> {
    return this.http.get<JobOffer[]>(this.urlJobOffer);
  }
  getListOffersByIdEmployer(id: number): Observable<any> {
    return this.http.get<JobOffer[]>(this.urlJobOffer + '/employer/' + id);
  }
  getListOffersByIdDriver(id: number): Observable<any> {
    return this.http.get<JobOffer[]>(this.urlJobOffer + '/employer/' + id);
  }

  insertJobOffer(jobOffer: JobOffer): Observable<any> {
    return this.http.post<JobOffer>(this.urlJobOffer, jobOffer);
  }

  getJobOfferById(id: number): Observable<any> {
    return this.http.get<JobOffer>(this.urlJobOffer + '/' + id);
  }

  updateJobOffer(jobOffer: JobOffer): Observable<any> {
    return this.http.put<JobOffer>(this.urlJobOffer + '/' + jobOffer.id, jobOffer);
  }
  deleteJobOffer(id: number): Observable<any> {
    return this.http.delete<JobOffer>(this.urlJobOffer + '/' + id);
  }


}
