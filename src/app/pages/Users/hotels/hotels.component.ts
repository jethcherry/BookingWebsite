import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hotel } from '../../../Models/Hotels';
import { HotelsService } from '../../../Services/hotels.service';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})
export class HotelsComponent implements OnInit {
  hotels:Hotel[]=[]

  constructor(private hotelService:HotelsService){}
  ngOnInit(){
    this.loadHotels();
  }
  private loadHotels(){
    this.hotels =this.hotelService.getHotels();
  }
  addHotel(){
    const newHotel:Hotel = {
        id: 0, // ID will be assigned by the service
        name: 'New Hotel',
        location: 'New City, New Country',
        description: 'This is a new hotel description.',
        imageUrl: 'assets/images/new-hotel.jpg'
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
  



  }