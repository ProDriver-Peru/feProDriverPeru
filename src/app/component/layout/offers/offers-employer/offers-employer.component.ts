import { Component, OnInit, ViewChild } from '@angular/core';
import { Offer } from 'src/model/Offer';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { OfferService } from 'src/app/service/offer.service';
@Component({
  selector: 'app-offers-employer',
  templateUrl: './offers-employer.component.html',
  styleUrls: ['./offers-employer.component.css']
})
export class OffersEmployerComponent implements OnInit{
  lista: Offer[] = [];
  displayedColumns: string[] = ['id', 'description', 'licenseTypeRequired', 'experienceYearsRequired', 'appliers', 'vehicle', 'idEmployer'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator : MatPaginator;
  @ViewChild(MatSort) sort : MatSort;

  constructor(private offerService: OfferService){
  }

  ngOnInit(): void {
    this.offerService.listOffers().subscribe(data=>{
      this.dataSource.data=data;
    })
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDialog(id: number) {
  }

}
