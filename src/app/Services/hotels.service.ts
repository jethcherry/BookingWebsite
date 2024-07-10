import { Injectable } from '@angular/core';
import { Hotel } from '../Models/Hotels';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  

constructor(private http:HttpClient){}
private readonly BASE_URL = 'http://localhost:5500/hotel/hotels'
getHotels():Observable<Hotel[]>{
  return this.http.get<Hotel[]>(this.BASE_URL)

}

postHotel(hotel: Hotel): Observable<{ message: string }> {
  return this.http.post<{ message: string }>(this.BASE_URL, hotel);
}

updateHotel(hotel: Hotel): Observable<{ message: string }> {
  return this.http.post<{ message: string }>(this.BASE_URL, hotel);
}


}