import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JobOffer } from 'src/model/JobOffer';
import { Router } from '@angular/router';
import { JobOfferService } from 'src/app/service/joboffer.service';
import { Employer } from 'src/model/Employer';

@Component({
  selector: 'app-new-job-offer',
  templateUrl: './new-job-offer.component.html',
  styleUrls: ['./new-job-offer.component.css'],
})
export class NewJobOfferComponent {
  form: FormGroup = new FormGroup({});
  propuesta: JobOffer = new JobOffer();
  mensaje: string = '';

  constructor(private router: Router, private jobOfferService: JobOfferService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(1000),
      ]),
      licensetyperequired: new FormControl('', [Validators.required]),
      experienceyears: new FormControl('', [Validators.required]),
      vehicle: new FormControl('', [Validators.required]),
      arrangement: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required]),
    });
  }
  aceptar() {
    this.propuesta.description = this.form.value.description;
    this.propuesta.licensetyperequired = this.form.value.licensetyperequired;
    this.propuesta.experienceyears = this.form.value.experienceyears;
    this.propuesta.vehicle = this.form.value.vehicle;
    this.propuesta.arrangement = this.form.value.arrangement;
    this.propuesta.location = this.form.value.location;
    this.propuesta.area = this.form.value.area;

    this.propuesta.idEmployer = JSON.parse(localStorage.getItem('userLogged') || '{}').id;

    this.jobOfferService.postOffer(this.propuesta).subscribe((data) => {
      this.mensaje = data.message;
      if (data.status == 200) {
        this.router.navigate(['/home/employer']);
      }
    });
    console.log(this.propuesta);
  }
}
