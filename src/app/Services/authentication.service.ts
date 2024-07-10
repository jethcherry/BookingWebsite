import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginReq, LoginResponse, RegisterResponse, User } from '../Models/register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly Base_URL = 'http://localhost:5500/auth/'

  constructor(private http:HttpClient) { }

  registerUser(newUser:User):Observable<RegisterResponse>{

    return this.http.post<RegisterResponse>(this.Base_URL + 'register', newUser )

  }
  loginUser(user:LoginReq):Observable<LoginResponse>{
    console.log('reaching here')
    
    return this.http.post<LoginResponse>(this.Base_URL + 'login', user)
  }


  
}
