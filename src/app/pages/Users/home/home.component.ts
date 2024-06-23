import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  images: string[] = [
    '/assets/tours/greece.jpeg',
    '/assets/tours/parisFrance.jpeg',
    '/assets/tours/portugal.jpeg',
    '/assets/tours/turkey.jpeg'
  ];

  currentImg: string = '';
  intervalId: any;

  ngOnInit(): void {
    this.startChangingImage();
  }

  ngOnDestroy(): void {
    this.stopChangingImage();
  }

  startChangingImage(): void {
    let index = 0;
    this.currentImg = this.images[index];
    this.intervalId = setInterval(() => {
      index = (index + 1) % this.images.length;
      this.currentImg = this.images[index];
    }, 3000); 
  }

  stopChangingImage(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
