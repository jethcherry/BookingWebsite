import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  constructor() {}

  logout(){
    localStorage.clear()
  }
  getRole():string | null{
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      return user ? user.role : null;
    }
    return null;

  }
  showStatus():boolean{
    const token =localStorage.getItem('token') as string
    if(token){
      this.isLoggedIn=true
      return true
     }
  
     this.isLoggedIn=false
     return false
    }
    isAdmin(){
      return this.getRole()==='admin'
    }

  }



  
