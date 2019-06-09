import { Component, OnInit } from '@angular/core';
import { Booking } from '../models/booking.model';
import { BookingService } from '../services/booking.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

  public bookings: Array<Booking> = new Array();
  public propId: number;
  
  constructor(
    private bookingService: BookingService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParamMap.subscribe((data: any) => {
      this.propId = data.params.propId;
      this.bookingService.getAllPropBookings(this.propId, (res) => {
        this.bookings = res;
      });
    });
  }

  accept(booking: Booking) {
    booking.status = "ACCEPTED";
    this.bookingService.accept(this.propId, booking.id);
  }
  
  reject(booking: Booking) {
    booking.status = "REJECTED";
    this.bookingService.reject(this.propId, booking.id);
  }

  ngOnInit() {
  }

}
