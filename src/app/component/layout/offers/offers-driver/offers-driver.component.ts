import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { JobOffer } from 'src/model/JobOffer';
import { JobOfferService } from 'src/app/service/joboffer.service';
import { User } from 'src/model/User';

@Component({
  selector: 'app-offers-driver',
  templateUrl: './offers-driver.component.html',
  styleUrls: ['./offers-driver.component.css'],
})
export class OffersDriverComponent implements OnInit {
  user: User = JSON.parse(localStorage.getItem('userLogged') || '{}');
  lista: JobOffer[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private jobOfferService: JobOfferService) {}
  displayedColumns: string[] = [
    'id',
    'description',
    'licensetyperequired',
    'experienceyears',
    'appliers',
    'vehicle',
    'idEmployer',
    'location',
    'area',
    'actions',
  ];
  dataSource = new MatTableDataSource();

  ngOnInit(): void {
    this.jobOfferService
      .getListOffersByIdDriver(this.user.id)
      .subscribe((data) => {
        this.lista = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  view(jobOffer: JobOffer) {}
  quit(id: number) {}
}
