import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Offer } from 'src/model/Offer';
import { Observable } from 'rxjs';

const baseUrl = environment.base;

@Injectable({
  providedIn: 'root'
})
export class OfferService {

    private urlOffer = `${baseUrl}/jobOffer`;

    constructor(private http:HttpClient) { }

    listOffers():Observable<any>{
      return this.http.get<Offer[]>(this.urlOffer)
    }
}
