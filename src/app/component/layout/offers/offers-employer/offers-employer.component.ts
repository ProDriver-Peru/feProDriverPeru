import { Component, OnInit, ViewChild } from '@angular/core';
import { JobOffer } from 'src/model/JobOffer';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { JobOfferService } from 'src/app/service/joboffer.service';
import { EmployerService } from 'src/app/service/employer.service';
import { User } from 'src/model/User';
import { OffersMadeComponent } from './offers-made/offers-made.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers-employer',
  templateUrl: './offers-employer.component.html',
  styleUrls: ['./offers-employer.component.css'],
})
export class OffersEmployerComponent implements OnInit {
  user: User = JSON.parse(localStorage.getItem('userLogged') || '{}');
  lista: JobOffer[] = [];
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

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private jobOfferService: JobOfferService,
    private employerService: EmployerService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.employerService.getEmployerById(this.user.id).subscribe((data) => {
      this.jobOfferService.getListOffersByIdEmployer(data.id).subscribe((data) => {
        this.lista = data;
        this.dataSource = data;
      });
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  editOffer(jobOffer: JobOffer) {
    this.dialog.open(OffersMadeComponent, {
      data: {
        jobOffer: jobOffer,
      }
    });
  }

  delete(id: number) {
    this.jobOfferService.deleteOffer(id).subscribe((data) => {
      this.lista = this.lista.filter((item) => item.id !== id);
    });
  }
}
