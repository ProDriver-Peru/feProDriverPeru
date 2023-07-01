import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Employer } from 'src/model/Employer';
import { Observable } from 'rxjs';
import { Applierperjoboffer } from 'src/model/ApplierPerJobOffer';

const baseUrl = environment.base;

@Injectable({
  providedIn: 'root'
})
export class ApplierperjobofferService {
  private urlApplierPerJobOffer = `${baseUrl}/applierperjoboffer`;

  constructor(private http: HttpClient) { }

  getApplierPerJobOffer(id: number): Observable<any> {
    return this.http.get(`${this.urlApplierPerJobOffer}/${id}`);
  }

  insertApplierPerJobOffer(applierPerJobOffer: Applierperjoboffer): Observable<any> {
    return this.http.post(`${this.urlApplierPerJobOffer}`, applierPerJobOffer);
  }

}
