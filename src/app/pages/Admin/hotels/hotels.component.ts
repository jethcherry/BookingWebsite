import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HotelsService } from '../../../Services/hotels.service';
import { CommonModule } from '@angular/common';
import { Hotel } from '../../../Models/Hotels';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css'] // Corrected to styleUrls and made it an array
})
export class HotelsComponent implements OnInit {

  Form!: FormGroup;
  hotels: Hotel[] = [];

  constructor(private fb: FormBuilder, private hotelService: HotelsService) { }

  ngOnInit(): void {
    this.Form = this.fb.group({
      hotelId: this.fb.control(null, Validators.required),
      HotelName: this.fb.control(null, Validators.required),
      HotelDescription: this.fb.control(null, Validators.required),
      HotelLocation: this.fb.control(null, Validators.required),
      HotelRating: this.fb.control(null, Validators.required),
      price: this.fb.control(null, Validators.required)
    });

    this.hotelService.getHotels().subscribe(res => {
      this.hotels = res;
    });
  }

  onSubmit() {
    if (this.Form.valid) {
      const hotelData: Hotel = this.Form.value;
      this.hotelService.postHotel(hotelData).subscribe(res => {
        console.log(res);
      });
    }
  }
}
