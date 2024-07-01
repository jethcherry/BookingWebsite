import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToursService } from '../../../Services/tours.service';
import { Tour } from '../../../Models/Tours';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.css'
})
export class ToursComponent {

  tourForm:FormGroup

  constructor(private fb: FormBuilder, private tourService: ToursService) {
    this.tourForm = this.fb.group({
      id: [null, Validators.required],
      name: ['', Validators.required],
      destination: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required],
      price: [0, Validators.required],
    });
  }
  onSubmit(){
    
  }

}
