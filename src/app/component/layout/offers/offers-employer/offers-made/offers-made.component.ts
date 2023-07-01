import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { JobOffer } from 'src/model/JobOffer';
import { FormControl, FormGroup } from '@angular/forms';
import { JobOfferService } from 'src/app/service/job-offer.service';
@Component({
  selector: 'app-offers-made',
  templateUrl: './offers-made.component.html',
  styleUrls: ['./offers-made.component.css'],
})
export class OffersMadeComponent implements OnInit {
  constructor(
    private jobOfferService: JobOfferService,
    public dialogRef: MatDialogRef<OffersMadeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  public form1: FormGroup = new FormGroup({});
  jobOffer: JobOffer = new JobOffer();
  mensaje: string = '';

  ngOnInit(): void {
    this.form1 = new FormGroup({
      description: new FormControl(this.data.jobOffer.description),
      licensetyperequired: new FormControl(this.data.jobOffer.licensetyperequired),
      experienceyears: new FormControl(this.data.jobOffer.experienceyears),
      vehicle: new FormControl(this.data.jobOffer.vehicle),
      arrangement: new FormControl(this.data.jobOffer.arrangement),
      location: new FormControl(this.data.jobOffer.location),
      area: new FormControl(this.data.jobOffer.area),
    });
  }
  aceptar() {
    this.jobOffer.id = this.data.jobOffer.id;
    this.jobOffer.idEmployer = this.data.jobOffer.idEmployer;
    this.jobOffer.description = this.form1.value.description;
    this.jobOffer.licensetyperequired = this.form1.value.licensetyperequired;
    this.jobOffer.experienceyears = this.form1.value.experienceyears;
    this.jobOffer.vehicle = this.form1.value.vehicle;
    this.jobOffer.arrangement = this.form1.value.arrangement;
    this.jobOffer.location = this.form1.value.location;
    this.jobOffer.area = this.form1.value.area;
    this.jobOffer.appliers = 0;
    console.log(this.jobOffer);


    this.jobOfferService.updateJobOffer(this.jobOffer).subscribe(() => {
      this.dialogRef.close(this.jobOffer);
    });
  }
}
