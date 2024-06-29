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
    this.loadTours();
  }

  private loadTours(): void {
    this.tours = this.tourService.getTours();
  }

  addTour(): void {
    const newTour: Tour = {
      id: 0, 
      name: 'New Tour',
      destination: 'New Destination',
      description: 'This is a new tour description.',
      imageUrl: 'assets/images/new-tour.jpg',
      price: 1200 
    };
    this.tourService.addTour(newTour);
    this.loadTours();
  }

  updateTour(tour: Tour): void {
    this.tourService.updateTour(tour);
    this.loadTours(); 
  }

  deleteTour(id: number): void {
    this.tourService.deleteTour(id);
    this.loadTours(); 
  }

bookNow(tour:Tour){

  this.tourService.bookTour(tour).subscribe(()=>{
    this.router.navigateByUrl('/bookings');
  })

}
  


}
