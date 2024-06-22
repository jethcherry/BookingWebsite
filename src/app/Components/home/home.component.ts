import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  slideIndex = 0;

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
