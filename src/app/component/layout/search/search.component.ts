import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DriverService } from 'src/app/service/driver.service';
import { Driver } from 'src/model/Driver';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  public index: number[];
  public newJobOffer: boolean = false;
  public listDrivers: Driver[] = [];
  public shownDrivers: Driver[] = [];
  public search: string = "";
  public licenseType: string = "AI";

  constructor(private driverService: DriverService, private router: Router) {
  }

  ngOnInit(): void {
    this.driverService.getListDrivers().subscribe((data: Driver[]) => {
        this.listDrivers=data;
    });
  }

  openNewJobOfferDialog() {
    this.newJobOffer = true;
  }

  calculateAge(birthday: string) {
    let birthdayDate = new Date(birthday);
    let ageDifMs = Date.now() - birthdayDate.getTime();
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  goToProfile(id: number){
    this.router.navigate(['/home/profile/',id]);
  }

  buscar(){
    if(this.search=="")
    {
      this.driverService.getListDriversByLicenseType(this.licenseType).subscribe((data: Driver[]) => {
        this.shownDrivers=data;
      }
      );
    }
    else
    {
      this.shownDrivers = this.listDrivers.filter((driver) => {
        return driver.user.name.toLowerCase().includes(this.search.toLowerCase()) || driver.user.lastName.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  }
}
