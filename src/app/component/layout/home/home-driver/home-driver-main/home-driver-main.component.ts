import { Component, OnInit } from '@angular/core';
import { Employer } from 'src/model/Employer';
import { JobOffer } from 'src/model/JobOffer';
import { JobOfferService } from 'src/app/service/job-offer.service';
import { Applierperjoboffer } from 'src/model/ApplierPerJobOffer';
import { ApplierperjobofferService } from 'src/app/service/applierperjoboffer.service';
import { User } from 'src/model/User';
import { Driver } from 'src/model/Driver';
import { DriverService } from 'src/app/service/driver.service';

@Component({
  selector: 'app-home-driver-main',
  templateUrl: './home-driver-main.component.html',
  styleUrls: ['./home-driver-main.component.css'],
})
export class HomeDriverMainComponent implements OnInit {
  user: User = JSON.parse(localStorage.getItem('userLogged') || '{}');
  public applier: Applierperjoboffer;

  shownOffers: JobOffer[] = [];
  constructor(
    private aplierperjobofferService: ApplierperjobofferService,
    private jobOfferService: JobOfferService,
    private driverService: DriverService
  ) {}

  ngOnInit(): void {
    this.jobOfferService.getListJobOffers().subscribe((data) => {
      this.shownOffers = data;
    });
  }
  postular(jobOffer: JobOffer) {
    this.driverService.getDriverById(this.user.id).subscribe((data) => {
      this.applier.idDriver = data;
      this.applier.statuS = 'Pendiente';
      this.applier.idJobOffer = jobOffer;
      this.applier.timestamp = new Date();
      this.aplierperjobofferService
        .insertApplierPerJobOffer(this.applier)
        .subscribe((data) => {
          console.log(data);
        });
    });
  }
}
