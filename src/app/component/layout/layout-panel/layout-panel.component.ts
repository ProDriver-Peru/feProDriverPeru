import { Component } from '@angular/core';
import { User } from 'src/model/User';

@Component({
  selector: 'app-layout-panel',
  templateUrl: './layout-panel.component.html',
  styleUrls: ['./layout-panel.component.css'],
})
export class LayoutPanelComponent {
  user: User = JSON.parse(localStorage.getItem('user') || '{}');
}
