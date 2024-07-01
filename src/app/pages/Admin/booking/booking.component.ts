import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Booking } from '../../../Models/Booking';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {

  
  hotelForm!: FormGroup;
  tourForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    
    this.hotelForm = this.fb.group({
      hotelName: ['', Validators.required],
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });

   
    this.tourForm = this.fb.group({
      tourName: ['', Validators.required],
      tourDate: ['', Validators.required],
      participants: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }

  // Hotel Booking Form Submission
  onHotelSubmit() {
    if (this.hotelForm?.valid) {
      const bookingData: Booking = {
        id: 1, // Example ID
        HotelId: 1, // Example Hotel ID
        name: this.hotelForm.value.hotelName,
        email: this.hotelForm.value.email,
        phone: this.hotelForm.value.phone,
        checkout: this.hotelForm.value.checkOutDate,
        checkin: this.hotelForm.value.checkInDate
      };
      console.log('Hotel Booking Form Submitted:', bookingData);
      // Handle form submission logic here (e.g., API calls, etc.)
    }
  }

  // Tour Booking Form Submission
  onTourSubmit() {
    if (this.tourForm?.valid) {
      const bookingData: Booking = {
        id: 1, // Example ID
        tourId: 1, // Example Tour ID
        name: this.tourForm.value.tourName,
        email: this.tourForm.value.email,
        phone: this.tourForm.value.phone,
        checkout: this.tourForm.value.participants,
        checkin: this.tourForm.value.tourDate
      };
      console.log('Tour Booking Form Submitted:', bookingData);
      // Handle form submission logic here (e.g., API calls, etc.)
    }
  }

}
