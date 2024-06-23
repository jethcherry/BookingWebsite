import { Injectable } from '@angular/core';
import { Bookings } from '../Models/Booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private bookings: Bookings[] = [];

  constructor() {}


  book(booking: Bookings): void {
    booking.id = this.bookings.length + 1; 
    this.bookings.push(booking);
    console.log('Booking details:', booking);
    alert('Booking successful!');
  }

  getBookings(): Bookings[] {
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
