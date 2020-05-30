import {Component, Inject, OnInit} from '@angular/core';
import {Tour} from '../../../shared/model/Tour';
import {Country} from '../../../shared/model/Country';
import {Hotel} from '../../../shared/model/Hotel';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {TourService} from '../../../shared/service/server/tour.service';
import {CountryService} from '../../../shared/service/server/country.service';
import {HotelService} from '../../../shared/service/server/hotel.service';

@Component({
  selector: 'app-update-tour',
  templateUrl: './update-tour.component.html',
  styleUrls: ['./update-tour.component.css']
})
export class UpdateTourComponent implements OnInit {

  tour: Tour;

  countries: Country[] = [];
  hotels: Hotel[] = [];

  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UpdateTourComponent>,
    private _formBuilder: FormBuilder,
    private _tourService: TourService,
    private _countryService: CountryService,
    private _hotelService: HotelService,
    @Inject(MAT_DIALOG_DATA) public data: Tour) {

    this.findAllCountries()
  }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      id: [this.data.id],
      country: [this.data.country, Validators.required],
      hotel: [this.data.hotel, Validators.required],
      tourStartDate: [this.data.tourStartDate, Validators.required],
      tourStopDate: [this.data.tourStopDate, Validators.required]
    });
    this.formGroup.valueChanges.subscribe(next => {
      this.tour = next;
      console.log(next);
    });
  }

  updateTour(): void {
    this._tourService.updateTour(this.tour).subscribe(
      next => {
        console.log(next)
        this.onNoClick();
        window.location.reload();
      },
      error => {
        console.error(error)
      }
    );
  }

  findAllCountries(): void {
    this._countryService.findAllCountries().subscribe(
      next => {
        console.log(next)
        this.countries = next
      },
      error => {
        console.error(error)
      }
    );
  }

  findHotels(country: Country): void {
    this._hotelService.findHotelsByCountry(country.id).subscribe(
      next => {
        console.log(next)
        this.hotels = next
      },
      error => {
        console.error(error)
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
