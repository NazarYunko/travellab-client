import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Hotel} from '../../model/Hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private _httpClient: HttpClient) { }

  saveHotel(hotel: Hotel): Observable<any> {
    return this._httpClient.post<Hotel>('/hotels', JSON.stringify(hotel))
      .pipe(catchError(err => throwError(err)));
  }

  findAllHotels(): Observable<Hotel[]> {
    return this._httpClient.get<Hotel[]>('/hotels')
      .pipe(map((value: any) => value._embedded.hotels), catchError(err => throwError(err)));
  }

  findOneHotel(id: number): Observable<Hotel> {
    return this._httpClient.get<Hotel>(`/hotels/${id}`)
      .pipe(catchError(error => throwError(error)))
  }

  deleteHotel(id: number): Observable<any> {
    return this._httpClient.delete<any>(`/hotels/${id}`)
      .pipe(catchError(error => throwError(error)));
  }

  updateHotel(hotel: Hotel): Observable<any> {
    return this._httpClient.put(`/hotels/${hotel.id}`, JSON.stringify(hotel))
      .pipe(catchError(error => throwError(error)))
  }
}
