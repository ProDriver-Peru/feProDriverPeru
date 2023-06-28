import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { JobOffer } from 'src/model/JobOffer';
import { Observable } from 'rxjs';

const baseUrl = environment.base;

@Injectable({
  providedIn: 'root'
})
export class OfferService {

    private urlOffer = `${baseUrl}/jobOffer`;

    constructor(private http:HttpClient) { }

    getListOffersByIdEmployer(idEmployer: number):Observable<any>{
      return this.http.get<JobOffer[]>(`${this.urlOffer}/employer/${idEmployer}`);
    }

    postOffer(jobOffer:JobOffer):Observable<any>{
      return this.http.post<JobOffer>(this.urlOffer, jobOffer);
    }

    

}
