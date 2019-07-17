import { Booking } from './../models/booking.model';
import { BookingService } from './../services/booking.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  public bookings: Booking[];
  public booking: Booking;
  constructor(private fb: FormBuilder,
              private service: BookingService) { }


  bookingForm = this.fb.group({
    name: [''],
    many: [''],
    date: [''],
    show: [''],
  });

  ngOnInit() {
    this.getListBookings();
  }

  getListBookings() {
    this.service.getListBookings().subscribe(
      (bookings: Booking[]) => {
        this.bookings = bookings;
      },
    );
  }

  onSubmit() {
    this.service.postBooking(this.bookingForm.value).subscribe(
      (booking: Booking) => {
        this.bookingForm.patchValue(booking);
        console.log('Enregistrement terminé !');
      },
      (error) => {
        console.log(`Erreur ! : ${error}`);
      },
    );
  }

}
