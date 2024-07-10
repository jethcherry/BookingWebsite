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
  }
}