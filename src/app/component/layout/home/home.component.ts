import { Component } from '@angular/core';
import { User } from 'src/model/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user: User = JSON.parse(localStorage.getItem('userLogged') || '{}');

}
