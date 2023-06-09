import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/model/Driver';
import { DriverService } from 'src/app/service/driver.service';

@Component({
  selector: 'app-home-employer-main',
  templateUrl: './home-employer-main.component.html',
  styleUrls: ['./home-employer-main.component.css']
})
export class HomeEmployerMainComponent implements OnInit{
  public selectedValue: any = "1";
  public newJobOffer: boolean = false;
  public listDrivers: Driver[] = [];
  public shownDrivers: Driver[] = [];
  constructor(private driverService: DriverService) {
  }
  ngOnInit(): void {
    this.driverService.getListDrivers().subscribe((data: Driver[]) => {
      this.listDrivers = data;
      //max 5
      this.shownDrivers = data.slice(0, 4);
    });
  }

  openNewJobOfferDialog() {
    this.newJobOffer = true;
  }
  calcAge(dateOfBirth: string): any {

  }

}
