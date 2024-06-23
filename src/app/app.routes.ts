import { Routes } from '@angular/router';
import { LoginComponent } from './pages/Users/login/login.component';
import { SignupComponent } from './pages/Users/signup/signup.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
