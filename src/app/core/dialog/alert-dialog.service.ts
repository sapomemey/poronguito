import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent, AlertDialogData } from './alert-dialog.component';

@Injectable()
export class AlertDialogService {
  constructor(private dialog: MatDialog) { }


  open(data: AlertDialogData) {
    this.dialog.open(AlertDialogComponent, { data });
  }

}
