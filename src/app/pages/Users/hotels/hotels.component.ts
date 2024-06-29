import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hotel } from '../../../Models/Hotels';
import { HotelsService } from '../../../Services/hotels.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})
export class HotelsComponent implements OnInit {
  hotels:Hotel[]=[]

  constructor(private hotelService:HotelsService,private router:Router){}
  ngOnInit(){
    this.loadHotels();
  }
  private loadHotels(){
    this.hotels =this.hotelService.getHotels();
  }
  addHotel(){
    const newHotel:Hotel = {
        id: 0, 
        name: 'New Hotel',
        location: 'New City, New Country',
        price:'',
        description: 'This is a new hotel description.',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/07/30/00/55/castle-4371727_640.jpg'
    }
      this.hotelService.addHotels(newHotel);
      this.loadHotels(); 
    }
    updateHotel(hotel: Hotel): void {
      this.hotelService.updateHotel(hotel);
      this.loadHotels(); 
    }
    
  deleteHotel(id: number): void {
    this.hotelService.deleteHotel(id);
    this.loadHotels(); 


    }
   
    bookNow(tour:Hotel){

      this.hotelService.bookHotel(tour).subscribe(()=>{
        this.router.navigateByUrl('/bookings');
      })



  }
}