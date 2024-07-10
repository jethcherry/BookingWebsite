import { Component } from '@angular/core';
import { Tour } from '../../../Models/Tours';
import { ToursService } from '../../../Services/tours.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.css'
})
export class ToursComponent {

  tours: Tour[] = [];

  constructor(private tourService: ToursService,private router:Router) {}

  ngOnInit(): void {

    this.tourService.getTours().subscribe(tours=>{
      console.log(tours)

    })
    
  }

  bookNow(tour:Tour){

  }

  


}
