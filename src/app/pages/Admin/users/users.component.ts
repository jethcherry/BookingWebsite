import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../../Models/register';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      role: ['admin', Validators.required],
      email: ['', Validators.email]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const newUser: User = {
        username: this.userForm.value.username,
        role: this.userForm.value.role,
        email: this.userForm.value.email
      };
      
      console.log(newUser);
   
      this.userForm.reset();
    } else {
     
      this.userForm.markAllAsTouched();
    }
  

}
}
