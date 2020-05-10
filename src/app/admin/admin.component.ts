import { Component } from '@angular/core';
import {AddTourTypeComponent} from '../dialog/admin/add-tour-type/add-tour-type.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(public dialog: MatDialog) {}

  openAddTourTypeDialog(): void {
    const dialogRef = this.dialog.open(AddTourTypeComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
