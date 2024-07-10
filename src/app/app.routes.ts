import { Routes } from '@angular/router';
import { LoginComponent } from './pages/Users/login/login.component';
import { ToursComponent } from './pages/Users/tours/tours.component';
import { HomeComponent } from './pages/Users/home/home.component';
import { HotelsComponent } from './pages/Users/hotels/hotels.component';
import { SignupComponent } from './pages/Users/signup/signup.component';
import { ContactusComponent } from './pages/Users/contactus/contactus.component';
import { AboutusComponent } from './pages/Users/aboutus/aboutus.component';
import { FaqsComponent } from './pages/Users/faqs/faqs.component';
import { BookingFormComponent } from './pages/Users/booking/booking.component';
import { AdminComponent } from './pages/Admin/admin/admin.component';
import { adminGuard } from './Guards/admin-guards.guard';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'tours',component:ToursComponent},
    {path:'hotels',component:HotelsComponent},
    {path:'signup',component:SignupComponent},
    {path:'contactus',component:ContactusComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'faqs',component:FaqsComponent},
    {path:'bookings',component:BookingFormComponent},
    {path:'admin',component:AdminComponent,canActivate: [adminGuard]},

   
];
