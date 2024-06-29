import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../Services/auth.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(public auth:AuthService){}

  isMenuOpen:boolean =false
  toggleMenu(){
    this.isMenuOpen =!this.isMenuOpen

  }

  closeMenu(){
    this.isMenuOpen = false

  }

}
