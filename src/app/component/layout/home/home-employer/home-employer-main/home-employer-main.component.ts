import { Component, OnInit, ViewChild } from '@angular/core';
import { Driver } from 'src/model/Driver';
import { DriverService } from 'src/app/service/driver.service';
//import { MatRadioButton } from '@angular/material/radio';


@Component({
  selector: 'app-home-employer-main',
  templateUrl: './home-employer-main.component.html',
  styleUrls: ['./home-employer-main.component.css']
})
export class HomeEmployerMainComponent implements OnInit{
  public maxList: any = "25";
  public selectedValue: any = "1";
  public newJobOffer: boolean = false;
  public listDrivers: Driver[] = [];
  public shownDrivers: Driver[] = [];
  //@ViewChild(MatRadioButton) radio: MatRadioButton;

  constructor(private driverService: DriverService) {
  }
  ngOnInit(): void {
    this.driverService.getListDrivers().subscribe((data: Driver[]) => {
      this.listDrivers=data;
      this.shownDrivers = this.listDrivers.slice(0,2);
    });


  }



  openNewJobOfferDialog() {
    this.newJobOffer = true;
  }
  calcAge(dateOfBirth: string): any {

  }

  refresh(){
    this.shownDrivers = this.listDrivers.slice(this.selectedValue*2-2,this.selectedValue*2);
  }
  nvBefore(){

  }
  nvNext(){
    //(this.selectedValue as number)++;
    //this.selectedValue = (this.selectedValue as number);
    console.log(this.selectedValue);

  }

}
