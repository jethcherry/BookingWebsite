import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Bookings } from '../../../Models/Booking';
import { BookingService } from '../../../Services/booking.service';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  booking: Bookings = {
    id: 0, 
    name: '',
    email: '',
    checkin: '',
    checkout: ''
  };
  bookings: Bookings[] = [];

  constructor(private bookingService: BookingService) {}

  bookNow(): void {
    this.bookingService.book(this.booking);
    this.bookings = this.bookingService.getBookings(); // Update list of bookings
    this.resetForm();
  }

  cancelBooking(id: number): void {
    this.bookingService.cancelBooking(id);
    this.bookings = this.bookingService.getBookings(); // Update list of bookings
  }
  private resetForm(): void {
    this.booking = {
      id: 0,
      name: '',
      email: '',
      checkin: '',
      checkout: ''
    };
  }
 

}
