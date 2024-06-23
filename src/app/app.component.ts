import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './pages/Users/login/login.component';
import { SignupComponent } from './pages/Users/signup/signup.component';
import { HeaderComponent } from './pages/Users/header/header.component';
import { HomeComponent } from './pages/Users/home/home.component';
import { HotelsComponent } from './pages/Admin/hotels/hotels.component';
import { BookingComponent } from './pages/Admin/booking/booking.component';
import { AboutusComponent } from './pages/Users/aboutus/aboutus.component';
import { ContactusComponent } from './pages/Users/contactus/contactus.component';
import { ToursComponent } from './pages/Admin/tours/tours.component';
import { FooterComponent } from './pages/Users/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SignupComponent,LoginComponent,HeaderComponent,HomeComponent,HotelsComponent,BookingComponent,AboutusComponent,ContactusComponent,ToursComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BookingWebsite';
}
