import { Injectable } from '@angular/core';
import { Booking } from '../Models/Booking';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private bookings: Booking[] = [];

  constructor() { }

  book(booking: Booking): Observable<any> {
    booking.id = this.bookings.length + 1;
    this.bookings.push(booking);
    console.log('Booking details:', booking);
    alert('Booking successful!');
    return of({}); 
  }

  getBookings(): Booking[] {
    return this.bookings;
  }

  cancelBooking(id: number): void {
    const index = this.bookings.findIndex(booking => booking.id === id);
    if (index !== -1) {
      this.bookings.splice(index, 1);
      console.log('Booking with id', id, 'cancelled.');
      alert('Booking cancelled.');
    }
  }
}