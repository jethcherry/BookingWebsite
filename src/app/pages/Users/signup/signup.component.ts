import { Component } from '@angular/core';
import { AuthService } from '../../../Services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  role: string = 'user';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  private validatePassword(password: string): string {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasRepeatingChars = /(.)\1\1/.test(password); 

    if (!password) {
      return 'The input fields cannot be empty';
    }
    if (password.length < minLength) {
      return `Password must be at least ${minLength} characters long.`;
    }
    if (!hasUpperCase) {
      return 'Password must contain at least one uppercase letter.';
    }
    if (!hasLowerCase) {
      return 'Password must contain at least one lowercase letter.';
    }
    if (!hasNumber) {
      return 'Password must contain at least one number.';
    }
    if (!hasSpecialChar) {
      return 'Password must contain at least one special character.';
    }
    if (hasRepeatingChars) {
      return 'Password must not contain repeating characters in sequence.';
    }
    return '';
  }

  public validateInputs(): boolean {
    if (!this.username || !this.email || !this.password || !this.role) {
      this.errorMessage = "All fields are required.";
      return false;
    }
    const passwordError = this.validatePassword(this.password);
    if (passwordError) {
      this.errorMessage = passwordError;
      return false;
    }
    this.errorMessage = '';
    return true;
  }

  onSubmit() {
    if (this.validateInputs()) {
      this.authService.register(this.username, this.password, this.role, this.email).subscribe(result => {
        if (result) {
          alert('Registration successful');
          this.router.navigate(['/login']);
        } else {
          this.errorMessage = 'Username or email already exists';
        }
      });
    } else {
      alert(this.errorMessage);
    }
  }
}
