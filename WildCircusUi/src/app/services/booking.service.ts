import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking.model';


@Injectable({
    providedIn: 'root'
})
export class BookingService {

    constructor(public http: HttpClient) { }

    public getListBookings(): Observable<Booking[]> {
        return this.http.get<Booking[]>(`http://localhost:3000/api/bookings`);
    }

    public getBooking(id: string): Observable<Booking> {
        return this.http.get<Booking>(`http://localhost:3000/api/Booking/${id}`);
    }

    public postBooking(booking: Booking): Observable<Booking> {
        return this.http.post<Booking>(`http://localhost:3000/api/bookings`, booking);
    }

    public deleteBooking(id: string): Observable<Booking> {
        return this.http.delete<Booking>(`http://localhost:3000/api/bookings/${id}`);
    }
}
