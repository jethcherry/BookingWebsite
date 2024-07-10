import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthenticationService } from '../../../Services/authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

form!:FormGroup
error!:string
message!:string



  constructor(private authService: AuthenticationService,private fb:FormBuilder,private  router:Router) { }


 ngOnInit(): void {
     this.form=this.fb.group({
      Email:this.fb.control(null,Validators.required),
      Password:this.fb.control(null,Validators.required)

     })
 }

 onSubmit(){
    this.authService.loginUser(this.form.value).subscribe(
      res=>{

        localStorage.setItem('role','admin')
        localStorage.setItem('token',res.token)
        this.message=res.message
        if(res.token=== 'admin'){
          this.router.navigate(['/admin'])

        }
        else{
          this.router.navigate(['/home'])
        }
      
      },
      err=>{
        console.log(err)
        this.error=err.message
      }

    )



 }
 
  

 

}
