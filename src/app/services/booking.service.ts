import { Injectable } from '@angular/core';
import { Booking } from '../models/booking.model';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient: HttpClient) {}

  getAllPropBookings(propId: number, assign: Function) {
    this.httpClient.get('http://localhost:3000/properties/' + propId + '/bookings').subscribe((response: Array<Booking>) => {
      assign(response);
    });
  }

  accept(propId: number, bookId: number) {
    this.httpClient.patch("http://localhost:3000/properties/" + propId + "/bookings/" + bookId, { status: "ACCEPTED" }).subscribe((response) => {});
  }

  reject(propId: number, bookId: number) {
    this.httpClient.patch("http://localhost:3000/properties/" + propId + "/bookings/" + bookId, { status: "REJECTED" }).subscribe((response) => {});
  }

}
