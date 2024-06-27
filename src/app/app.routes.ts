import { Routes } from '@angular/router';
import { LoginComponent } from './pages/Users/login/login.component';
import { ToursComponent } from './pages/Admin/tours/tours.component';
import { HomeComponent } from './pages/home/home.component';
import { HotelsComponent } from './pages/Admin/hotels/hotels.component';
import { SignupComponent } from './pages/Users/signup/signup.component';
import { ContactusComponent } from './pages/Users/contactus/contactus.component';
import { AboutusComponent } from './pages/Users/aboutus/aboutus.component';
import { FaqsComponent } from './pages/faqs/faqs.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'tours',component:ToursComponent},
    {path:'hotels',component:HotelsComponent},
    {path:'signup',component:SignupComponent},
    {path:'contactus',component:ContactusComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'faqs',component:FaqsComponent}
   
];
