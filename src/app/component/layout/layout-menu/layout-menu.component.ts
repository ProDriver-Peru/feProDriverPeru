import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-menu',
  templateUrl: './layout-menu.component.html',
  styleUrls: ['./layout-menu.component.css']
})
export class LayoutMenuComponent implements OnInit{

  @ViewChild(MatButtonToggleGroup) group: MatButtonToggleGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

    // https://angular.io/errors/NG0100
    setTimeout (() => {
      if (this.router.url.includes("/home")){
        this.group.value = "home";
      }else if (this.router.url.includes("/offers")){
        this.group.value = "offers";
      }else if (this.router.url.includes("/notifications")){
        this.group.value = "notifications";
      }else{
        this.group.value = "home";
      }
    }, 0);

  }

}
