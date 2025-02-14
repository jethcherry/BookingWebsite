import { Component, OnInit } from '@angular/core';
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
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  hotels: Hotel[] = [];

  constructor(private hotelService: HotelsService, private router: Router) {}

  ngOnInit() {
    this.loadHotels();
  }

  private loadHotels() {
    this.hotelService.getHotels().subscribe(hotels => {
      this.hotels = hotels;
    });
  }

  // addHotel() {
  //   const newHotel: Hotel = {
  //     hotelId: 0,
  //     name: 'New Hotel',
  //     location: 'New City, New Country',
  //     price: '',
  //     description: 'This is a new hotel description.',
  //     imageUrl: 'https://cdn.pixabay.com/photo/2019/07/30/00/55/castle-4371727_640.jpg'
  //   };

    // this.hotelService.addHotel(newHotel).subscribe(() => {
    //   this.loadHotels();
    // });
  }

  // updateHotel(hotel: Hotel): void {
  //   this.hotelService.updateHotel(hotel).subscribe(() => {
  //     this.loadHotels();
  //   });
  // }

//   deleteHotel(id: number): void {
//     // this.hotelService.deleteHotel(id).subscribe(() => {
//     //   this.loadHotels();
//     // });
//   }

//   bookNow(tour: Hotel) {
//     // this.hotelService.bookHotel(tour).subscribe(() => {
//     //   this.router.navigateByUrl('/bookings');
//     // });
//   }
// }
