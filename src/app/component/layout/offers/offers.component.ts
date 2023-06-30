import { Component } from '@angular/core';
import { User } from 'src/model/User';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent {
  public user: User = JSON.parse(localStorage.getItem('userLogged') || '{}');

}
