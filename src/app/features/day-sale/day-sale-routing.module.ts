import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DaySaleComponent } from './day-sale.component';

const routes: Routes = [
  { path: '', component: DaySaleComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DaySaleRoutingModule { }
