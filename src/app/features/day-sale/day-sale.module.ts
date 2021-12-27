import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { DaySaleComponent } from './day-sale.component';
import { DaySaleRoutingModule } from './day-sale-routing.module';

@NgModule({
  declarations: [DaySaleComponent],
  imports: [
    DaySaleRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    FormsModule
  ]
})
export class DaySaleModule { }
