import {Component, OnInit} from '@angular/core';
import {TourType} from '../../shared/model/TourType';
import {TourTypeService} from '../../shared/service/server/tour-type.service';
import {throwError} from 'rxjs';
import {MatDialog, MatSnackBar} from '@angular/material';
import {AddTourTypeComponent} from '../../dialog/admin/add-tour-type/add-tour-type.component';
import {UpdateTourTypeComponent} from '../../dialog/admin/update-tour-type/update-tour-type.component';

@Component({
  selector: 'all-tours',
  templateUrl: './all-tours.component.html',
  styleUrls: ['./all-tours.component.css']
})
export class AllToursComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'description', 'imagePath', 'update', 'delete'];

  tourTypes: TourType[] = [];

  constructor(private _tourTypeService: TourTypeService,
              private _snackBar: MatSnackBar,
              private _dialog: MatDialog) {
    this.init();
  }

  deleteTourType(tourType: TourType) {
    this._tourTypeService.deleteTourType(tourType.id).subscribe(next => {
      this.openSnackBar(`Тип туру ${tourType.name} видалений!`, 'OK');
        this.init();
      },
      error => {
        throwError(error);
      });
  }

  openUpdateTourTypeDialog(tourType: TourType) {
    const dialogRef = this._dialog.open(UpdateTourTypeComponent, { data: tourType});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.init()
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  init() {
    this._tourTypeService.findAllTourTypes().subscribe(
      next => {
        this.tourTypes = next;
        console.log(next);
      },
      error => {
        console.error(error);
      }
    );
  }

  ngOnInit() {
  }

}
