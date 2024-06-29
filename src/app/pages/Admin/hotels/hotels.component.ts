import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HotelsService } from '../../../Services/hotels.service';
import { Hotel } from '../../../Models/Hotels';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})
export class HotelsComponent  implements OnInit {

  hotelForm: FormGroup;
  hotels: Hotel[] = [];

  constructor(private formBuilder: FormBuilder, private hotelsService: HotelsService) {
    this.hotelForm = this.formBuilder.group({
      hotels: this.formBuilder.array([
        this.createHotelFormGroup()
      ])
    });
  }

  ngOnInit(): void {
  }

  createHotelFormGroup(): FormGroup {
    return this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      location: ['', Validators.required],
      price: ['', Validators.required],
      description: [''],
      imageUrl: ['']
    });
  }

  get hotelsFormArray(): FormArray {
    return this.hotelForm.get('hotels') as FormArray;
  }

  onSubmit(): void {
    if (this.hotelForm.valid) {
      const newHotel: Hotel = this.hotelsFormArray.at(0).value;
      this.hotelsService.addHotel(newHotel).subscribe(
        () => {
          alert('Hotel added successfully');
          this.hotelForm.setControl('hotels', this.formBuilder.array([this.createHotelFormGroup()]));
        },
        error => {
          console.error('Error adding hotel:', error);
          alert('Failed to add hotel. Please try again.');
        }
      );
    } else {
      alert('Please fill in all required fields.');
    }
  }

}
