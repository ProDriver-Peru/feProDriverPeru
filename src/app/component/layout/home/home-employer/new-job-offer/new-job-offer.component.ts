import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { JobOffer } from 'src/model/JobOffer';

@Component({
  selector: 'app-new-job-offer',
  templateUrl: './new-job-offer.component.html',
  styleUrls: ['./new-job-offer.component.css']
})
export class NewJobOfferComponent {
  form: FormGroup = new FormGroup({});
  propuesta: JobOffer = new JobOffer();
  mensaje: string = "";
  aceptar(){

  }
}
