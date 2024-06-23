import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit,OnDestroy{

  images:string[] = [
    '../../../assets/tours/greece.jpeg',
    '../../../assets/tours/parisFrance.jpeg',
    '../../../assets/tours/portugal.jpeg',
    '../../../assets/tours/turkey.jpeg'
  ]

  currentImg: string=''
  intervalId:any

  ngOnInit(): void {
      this.startChangingImage()
  }
  ngOnDestroy(): void {
      clearInterval(this.intervalId)
  }
  startChangingImage():void
  {
    let index = 0
    this.currentImg = this.images[index]
  }
  stopChangingImage():void
  {
    clearInterval(this.intervalId)
  }  


}
