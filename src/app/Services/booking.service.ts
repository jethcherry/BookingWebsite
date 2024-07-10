import { Injectable } from '@angular/core';
import { Booking } from '../Models/Booking';
import { HttpClient } from '@angular/common/http';
import { Tour } from '../Models/Tours';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  
constructor(private http:HttpClient){}
private readonly BASE_URL = 'http://localhost:5500/create/bookings'
getBookings():Observable<Booking[]>{
  return this.http.get<Booking[]>(this.BASE_URL)

}

postBooking(hotel: Booking): Observable<{ message: string }> {
  return this.http.post<{ message: string }>(this.BASE_URL, hotel);
}

updateBooking(hotel: Booking): Observable<{ message: string }> {
  return this.http.post<{ message: string }>(this.BASE_URL, hotel);
}

  
  
}