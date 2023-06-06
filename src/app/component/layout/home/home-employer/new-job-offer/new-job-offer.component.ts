import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Offer } from 'src/model/Offer';

@Component({
  selector: 'app-new-job-offer',
  templateUrl: './new-job-offer.component.html',
  styleUrls: ['./new-job-offer.component.css']
})
export class NewJobOfferComponent {
  form: FormGroup = new FormGroup({});
  propuesta: Offer = new Offer();
  mensaje: string = "";
  aceptar(){

  }
}
