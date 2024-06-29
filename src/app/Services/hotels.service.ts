import { Injectable } from '@angular/core';
import { Hotel } from '../Models/Hotels';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  private hotels: Hotel[] = [
    {
      id:1,
      name:'Badrutt s Palace ',
      location:'Switzerland',
      price: '34000',
      description:'Badrutt’s Palace is set against a backdrop of craggy, snow-capped mountains with cascading views of the winding valleys and mirror-like lakes below. The hotel has, for years, been the go-to spot for those looking for a sophisticated Alpine escape (it opened in 1896) and it keeps going from strength to strength. At its core, it’s still the magnificent palace it’s always been,.',
      imageUrl:'https://cdn.pixabay.com/photo/2024/06/17/15/03/london-8835826_640.jpg'
    },
    {
      id:2,
      name:'Aman Tokyo',
      location:'Tokyo',
      price: '65000',
      description:'Serene and unwaveringly deluxe atmosphere belies its location. The hotel became the Aman’s first urban outpost when it opened in 2014, smoothly spanning the top six floors of a shiny 38-storey skyscraper in the bustling financial district Otemachi.',
      imageUrl:'https://www.aman.com/sites/default/files/styles/central_carousel_large/public/2022-09/Mount%20fuji%20landscape_aman%20tokyo.jpg?itok=9AVcEf6q'
    },
    {
      id:3,
      name:'Soneva Fushi',
      location:'Maldives',
      price: '340000',
      description:' The resort’s mantra of ‘no news, no shoes’ does much to summarise its philosophy. Once guests are ferried from seaplane to shore in a speedboat, footwear is removed and shipped to villas, only to be reapplied on departure from the island – just as it should be at the winner of the Lost Explorer Best Beach Hotel Award 2023',
      imageUrl:'https://cdn.pixabay.com/photo/2019/12/18/10/02/maldives-4703551_640.jpg'
    }
    ,
    {
      id:4,
      name:'One&Only Mandarina hero',
      location:'Riviera Nayarit',
      price: '100000',
      description:'Sandwiched between the tropical rainforests of Sierra de Vallejo reserve and the Pacific Ocean, this 88-acre stay was one of the first to arrive in the luxurious Mandarina development along Mexico’s Pacific shoreline. ',
      imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4nNutTI0FL1fgRlOhv_91P3PkzH3a7s4d5A&s'
    },
    {
      id:5,
      name:'Four Seasons Firenze',
      location:'Florence',
      price: '90000',
      description:'Florence’s largest private garden provides the tranquil setting for this character-packed Four Seasons property, a beautifully restored 15th-century Medici palace.',
      imageUrl:'https://www.theworlds50best.com/hotels/filestore/jpg/W50BH23_PROFILE_Mandarin%20Oriental%20Bangkok%20exterior.jpg'
    },
    {
      id:6,
      name:'Singita',
      location:'Krugger National Park',
      price: '87000',
      description:'Guided by a ‘touch the earth lightly’ philosophy, ecotourism pioneer Singita’s two Kruger National Park lodges, Lebombo and Sweni, offer sun-baked luxury backed up by deeply held social and environmental principles',
      imageUrl:'https://www.theworlds50best.com/hotels/filestore/jpg/W50BH23_PROFILE_The%20Upper%20House%20hero.jpg'
    },
    {
      id:7,
      name:'Claridges',
      location:'London',
      price: '76000',
      description:' Since its 1812 opening, Claridge’s has played host to British high society and discerning international guests. It is the jewel in the crown of the Maybourne Hotel Group, which has another two properties in London and recently expanded to the French Riviera and LA.',
      imageUrl:'https://www.theworlds50best.com/hotels/filestore/jpg/W50BH23_PROFILE_Rosewood%20Hong%20Kong%20room.jpg'
    },
   
    {
      id:8,
      name:'Four Seasons',
      location:'Madrid',
      price: '54000',
      description:'Four Seasons Madrid opened in 2020 following a seven-year project to restore seven landmark buildings. The sprawling site is a beacon of modern hospitality that’s as much a hangout for locals as it is visitors',
      imageUrl:'https://www.theworlds50best.com/hotels/filestore/jpg/W50BH23_PROFILE_One&Only%20Mandarina%20hero.jpg'
    }
  ];


  constructor() { }
  addHotels(hotel:Hotel):void{
    hotel.id = this.generateId();
    this.hotels.push(hotel)
  }
  getHotels():Hotel[]{
    return this.hotels;
  }
  getHotel(id:number):Hotel  |  undefined{
    return this.hotels.find(h=>h.id===id);
  }
  updateHotel(hotel:Hotel):void{
    const index = this.hotels.findIndex(h => h.id===hotel.id);
    if(index !== -1){
      this.hotels[index]=hotel
    }

  }
  deleteHotel(id:number){
    const index = this.hotels.findIndex(hotel => hotel.id === id);
    if(index !== -1){
      this.hotels.splice(index, 1);

  }
}
  private generateId(){
    return this.hotels.length > 0 ? Math.max(...this.hotels.map(hotel => hotel.id)) + 1 : 1;
  }
}
