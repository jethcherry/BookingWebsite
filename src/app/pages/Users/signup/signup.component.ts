import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../Services/authentication.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form!: FormGroup;
  errorMessage = '';

  constructor(private fb: FormBuilder, private auth: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      Name: [null, Validators.required],
      Email: [null, [Validators.required, Validators.email]],
      Password: [null, [Validators.required, this.validatePassword]],
     
    });
  }

  private validatePassword(control: any): { [key: string]: any } | null {
    const password = control.value;
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasRepeatingChars = /(.)\1\1/.test(password);

    if (!password) {
      return { error: 'The input fields cannot be empty' };
    }
    if (password.length < minLength) {
      return { error: `Password must be at least ${minLength} characters long.` };
    }
    if (!hasUpperCase) {
      return { error: 'Password must contain at least one uppercase letter.' };
    }
    if (!hasLowerCase) {
      return { error: 'Password must contain at least one lowercase letter.' };
    }
    if (!hasNumber) {
      return { error: 'Password must contain at least one number.' };
    }
    if (!hasSpecialChar) {
      return { error: 'Password must contain at least one special character.' };
    }
    if (hasRepeatingChars) {
      return { error: 'Password must not contain repeating characters in sequence.' };
    }
    return null;
  }

onSignup() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.auth.registerUser(this.form.value).subscribe(
        res => {
          alert('Registration successful!');
          this.router.navigate(['/login'])
          console.log(res.message);
          this.form.reset();
        },
        err => {
          console.error(err);
          alert('Registration failed. Please try again.');
        }
      );
      this.form.reset()
    } else {
      alert('Please fix the following errors:\n\n' + this.getFormErrors());
      this.form.markAllAsTouched();
    }
  }

  private getFormErrors() {
    let errors = '';
    Object.keys(this.form.controls).forEach(key => {
      const controlErrors = this.form.get(key)?.errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          errors += `- ${this.getErrorMessage(key, keyError)}\n`;
        });
      }
    });
    return errors;
  }

  private getErrorMessage(controlName: string, errorType: string) {
    const errors: any = {
      Name: {
        required: 'Name is required.'
      },
      Email: {
        required: 'Email is required.',
        email: 'Please enter a valid email address.'
      },
      Password: {
        required: 'Password is required.',
        validatePassword: 'Please enter a valid password.'
      }
    };
    return errors[controlName][errorType];
  }
}



  