import { Component } from '@angular/core';
import { BookingComponent } from '../booking/booking.component';
import { HotelsComponent } from '../hotels/hotels.component';
import { ToursComponent } from '../tours/tours.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [BookingComponent,HotelsComponent,ToursComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
