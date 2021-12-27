import { Component } from '@angular/core';
import { Menu } from './domain/menu';

export interface DataSource {
  menu: string;
  total: string;
}

@Component({
  templateUrl: './day-sale.component.html',
  styleUrls: ['./day-sale.component.scss']
})
export class DaySaleComponent {
  menu1 = new Menu('Menu 1', 0);
  menu2 = new Menu('Menu 2', 0);
}
