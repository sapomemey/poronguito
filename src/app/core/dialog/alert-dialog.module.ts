import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { AlertDialogComponent } from './alert-dialog.component';
import { AlertDialogService } from './alert-dialog.service';

@NgModule({
  declarations: [AlertDialogComponent],
  imports: [
    MatDialogModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule,
    MatButtonModule
  ],
  providers: [AlertDialogService]
})
export class AlertDialogModule { }
