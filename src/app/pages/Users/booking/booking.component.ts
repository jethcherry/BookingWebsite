import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Booking } from '../../../Models/Booking';
import { BookingService } from '../../../Services/booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-form',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: '../../Users/booking/booking.component.html',
  styleUrls: ['../../Users/booking/booking.component.css']
})
export class BookingFormComponent  {


  booking:Booking={
    id:0,
    name: '',
    email: '',
    phone: '',
    HotelId: 0,
    tourId: 0,
    checkout:0,
    checkin: 0

  }

  constructor(private bookingService:BookingService,private router:Router){}
  submitBooking(): void {
    this.bookingService.book(this.booking).subscribe(()=>{
      this.router.navigateByUrl('/tours')

    })
  }

  
 
}




  

 


