import { Component } from '@angular/core';

@Component({
  selector: 'app-home-employer-main',
  templateUrl: './home-employer-main.component.html',
  styleUrls: ['./home-employer-main.component.css']
})
export class HomeEmployerMainComponent {
  public selectedValue: any = "1";
  public newJobOffer: boolean = false;
  constructor() {

  }

  openNewJobOfferDialog() {
    this.newJobOffer = true;
  }
}
