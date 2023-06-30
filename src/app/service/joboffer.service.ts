import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { JobOffer } from 'src/model/JobOffer';
import { Observable } from 'rxjs';

const baseUrl = environment.base;

@Injectable({
  providedIn: 'root'
})
export class JobOfferService {

    private urlJobOffer = `${baseUrl}/jobOffer`;

    constructor(private http:HttpClient) { }

    getListOffers():Observable<any>{
      return this.http.get<JobOffer[]>(this.urlJobOffer);
    }

    getListOffersByIdEmployer(idEmployer: number):Observable<any>{
      return this.http.get<JobOffer[]>(`${this.urlJobOffer}/idEmployer/${idEmployer}`);
    }
    /* */
    getjobOfferById(id: number):Observable<any>{
      return this.http.get<JobOffer>(`${this.urlJobOffer}/${id}`);
    }

    postOffer(jobOffer:JobOffer):Observable<any>{
      return this.http.post<JobOffer>(this.urlJobOffer, jobOffer);
    }

    deleteOffer(id: number):Observable<any>{
      return this.http.delete<JobOffer>(`${this.urlJobOffer}/${id}`);
    }

}
