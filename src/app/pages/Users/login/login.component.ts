import { Component } from '@angular/core';
import { AuthService } from '../../../Services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  public validateInputs(): boolean {
    if (!this.username || !this.password) {
      this.errorMessage = "Both fields are required.";
      return false;
    }
    this.errorMessage = '';
    return true;
  }

  onSubmit() {
    if (this.validateInputs()) {
      this.authService.login(this.username, this.password).subscribe(result => {
        if (result) {
          alert('Login successful');
          if (result.role === 'admin') {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/user']);
          }
        } else {
          this.errorMessage = 'Invalid username or password';
        }
      });
    } else {
      alert(this.errorMessage);
    }
  }

 

}
