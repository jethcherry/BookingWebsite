import { Component } from '@angular/core';
import { BookingComponent } from '../booking/booking.component';
import { HotelsComponent } from '../hotels/hotels.component';
import { ToursComponent } from '../tours/tours.component';
import { UsersComponent } from '../users/users.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [BookingComponent,HotelsComponent,ToursComponent,UsersComponent,CommonModule,FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  selectedComponent: string = 'hotels'; 

  toggleComponent(component: string) {
    this.selectedComponent = component;
  }

}
