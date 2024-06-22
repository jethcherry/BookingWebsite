import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  slideIndex = 0;

  slides = [
    { src: '../../assets/tours/parisFrance.jpeg', alt: 'Slide 1' },
    { src: '../../assets/tours/portugal.jpeg', alt: 'Slide 2' },
    { src: '../../assets/tours/turkey.jpeg', alt: 'Slide 3' },
    { src: '../../assets/tours/greece.jpeg', alt: 'Slide 4' }
  ];

  constructor() { }

  ngOnInit(): void {
    this.showSlides();
  }
  
 
 
  showSlides(): void {
    const slides = document.getElementsByClassName("slide") as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    this.slideIndex++;
    if (this.slideIndex > slides.length) {
      this.slideIndex = 1;
    }
    slides[this.slideIndex - 1].style.display = "block";
    setTimeout(() => this.showSlides(), 3000); 
  }

}
