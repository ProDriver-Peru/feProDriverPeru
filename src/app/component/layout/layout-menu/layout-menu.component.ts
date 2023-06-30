import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-layout-menu',
  templateUrl: './layout-menu.component.html',
  styleUrls: ['./layout-menu.component.css'],
})
export class LayoutMenuComponent implements OnInit {
  @ViewChild(MatButtonToggleGroup) group: MatButtonToggleGroup;

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.refresh();
      }
    });
  }
  refresh(): void {
    if (this.router.url.includes('/home')) {
      this.group.value = 'home';
    } else if (this.router.url.includes('/offers')) {
      this.group.value = 'offers';
    } else if (this.router.url.includes('/notifications')) {
      this.group.value = 'notifications';
    } else if (this.router.url.includes('/my-profile')) {
      this.group.value = 'my-profile';
    } else {
      this.group.value = 'home';
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.refresh();
    }, 0);
  }

  logout(): void {
    console.log('HEREEEEEEE');

    localStorage.removeItem('userLogged');
    this.router.navigate(['login']);
  }

}
