import { Component, OnInit } from '@angular/core';
import { Employer } from 'src/model/Employer';
import { JobOffer } from 'src/model/JobOffer';
import { JobOfferService } from 'src/app/service/joboffer.service';

@Component({
  selector: 'app-home-driver-main',
  templateUrl: './home-driver-main.component.html',
  styleUrls: ['./home-driver-main.component.css'],
})
export class HomeDriverMainComponent implements OnInit {
  shownOffers: JobOffer[] = [];
  jobOffer: JobOffer = new JobOffer();
  constructor(private jobOfferService: JobOfferService) {}
  ngOnInit(): void {
    this.jobOfferService.getListOffers().subscribe((data) => {
      this.shownOffers = data;
    });
    this.jobOfferService.getjobOfferById(1).subscribe((data) => {
      this.jobOffer = data;
    });
  }
}
