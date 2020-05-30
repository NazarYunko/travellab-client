import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TourType} from '../../model/TourType';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Tour} from '../../model/Tour';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private _httpClient: HttpClient) {
  }

  saveTour(tour: Tour): Observable<any> {
    return this._httpClient.post<Tour>('/tours', JSON.stringify(tour))
      .pipe(catchError(err => throwError(err)));
  }

  findAllTours(): Observable<Tour[]> {
    return this._httpClient.get<Tour[]>('/tours')
      .pipe(map((value: any) => value._embedded.tours), catchError(err => throwError(err)));
  }

  findOneTour(id: number): Observable<Tour> {
    return this._httpClient.get<Tour>(`/tours/${id}`)
      .pipe(catchError(error => throwError(error)))
  }

  deleteTour(id: number): Observable<any> {
    return this._httpClient.delete<any>(`/tours/${id}`)
      .pipe(catchError(error => throwError(error)));
  }

  updateTour(tour: Tour): Observable<any> {
    return this._httpClient.put(`/tours/${tour.id}`, JSON.stringify(tour))
      .pipe(catchError(error => throwError(error)))
  }
}
