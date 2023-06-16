import { Component, OnInit, ViewChild } from '@angular/core';
import { Driver } from 'src/model/Driver';
import { DriverService } from 'src/app/service/driver.service';
import { MatRadioButton } from '@angular/material/radio';


@Component({
  selector: 'app-home-employer-main',
  templateUrl: './home-employer-main.component.html',
  styleUrls: ['./home-employer-main.component.css']
})
export class HomeEmployerMainComponent implements OnInit{
  public maxList: any = "25";
  public selectedValue: any = "1";
  public index: number[];
  public newJobOffer: boolean = false;
  public listDrivers: Driver[] = [];
  public shownDrivers: Driver[] = [];
  @ViewChild(MatRadioButton) radio: MatRadioButton;

  constructor(private driverService: DriverService) {
  }
  ngOnInit(): void {
    this.driverService.getListDrivers().subscribe((data: Driver[]) => {
      if(data.length>24){
        this.listDrivers = data.slice(0,24);
        this.index = Array.from(Array(Math.ceil(this.listDrivers.length/2)).keys());
      }
      else{
        this.listDrivers=data;
        this.index = Array.from(Array(Math.ceil(this.listDrivers.length/2)).keys());
      }
      if(this.listDrivers.length>=2){
        this.shownDrivers = this.listDrivers.slice(0,2);
      }
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



  }

}
