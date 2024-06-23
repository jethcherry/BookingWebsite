import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../Models/register';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = [
    { username: 'admin', password: 'Admin@123', role: 'admin' },
    { username: 'user', password: 'User@123', role: 'user' }
  ];

  constructor() { }

  login(username: string, password: string): Observable<{ role: string } | null> {
    const user = this.users.find(u => u.username === username && u.password === password);
    return of(user ? { role: user.role } : null);
  }

  register(username: string, password: string, role: string, email: string): Observable<boolean> {
    if (this.users.some(u => u.username === username || u.email === email)) {
      return of(false); 
    }
    this.users.push({ username, password, role, email });
    return of(true);
  }
}
