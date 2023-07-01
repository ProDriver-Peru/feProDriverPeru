import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JobOffer } from 'src/model/JobOffer';
import { Router } from '@angular/router';
import { JobOfferService } from 'src/app/service/job-offer.service';
import { Employer } from 'src/model/Employer';
import { EmployerService } from 'src/app/service/employer.service';
import { User } from 'src/model/User';

@Component({
  selector: 'app-new-job-offer',
  templateUrl: './new-job-offer.component.html',
  styleUrls: ['./new-job-offer.component.css'],
})
export class NewJobOfferComponent {
  user: User = JSON.parse(localStorage.getItem('userLogged') || '{}');
  form: FormGroup = new FormGroup({});
  propuesta: JobOffer = new JobOffer();
  mensaje: string = '';

  constructor(
    private router: Router,
    private jobOfferService: JobOfferService,
    private employerService: EmployerService
  ) {}

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
    this.employerService.getEmployerById(this.user.id).subscribe((data) => {
      this.propuesta.description = this.form.value.description;
      this.propuesta.licensetyperequired = this.form.value.licensetyperequired;
      this.propuesta.experienceyears = this.form.value.experienceyears;
      this.propuesta.appliers = 0;
      this.propuesta.vehicle = this.form.value.vehicle;
      this.propuesta.arrangement = this.form.value.arrangement;
      this.propuesta.location = this.form.value.location;
      this.propuesta.area = this.form.value.area;
      this.propuesta.idEmployer = data;
      this.jobOfferService.insertJobOffer(this.propuesta).subscribe(() => {
        this.router.navigate(['/home']);
      });
    });
  }
}
