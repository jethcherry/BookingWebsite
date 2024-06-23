import { Injectable } from '@angular/core';
import { Tour } from '../Models/Tours';

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  private tours: Tour[]=[
    {
      id: 1,
      name: 'Arctic Ventures',
      destination: 'Alaska',
      description: 'Exploring the North Pole may seem surreal. After all, it is the land of the midnight sun and home to polar bears and puffins. But you can also hike in Alaskan rain forest, kayak alongside peaceful coastlines, or relax in luxury as you sail past breathtaking icebergs, pods of orca and breaching humpbacks',
      imageUrl: '../assets/hotels/alaska.jpeg',
      price: 45000 

    },
    {
      id: 2,
      name: 'Wine & Dine &…Bike',
      destination: 'Burgundy',
      description: 'Explore Beaune, the vibrant capital of the Cote dOr. Then, get off the beaten path literally as you bike through rolling hills and quaint, friendly towns from vineyard to vineyard. Sip vintages surrounded by the fields in which they were grown, dine in chateaus and enjoy private cellar tours.',
      imageUrl: '../assets/hotels/burgundy.jpeg',
      price: 56000 

    },
    {
      id: 3,
      name: ' Castles & Countryside',
      destination: 'Ireland',
      description: 'Maybe you are tracing your family roots. Or perhaps you have fantasies of spending the night in a medieval castle. Whatever the reason, if you d like to start each day with rashers and sausage and end it in a town pub, perhaps cruising along the Irish countryside is just your speed.',
      imageUrl: '../assets/hotels/ireland.jpeg',
      price: 58000 

    },
    {
      id: 4,
      name: 'Mythology & Mountain Peaks',
      destination: 'India',
      description: 'The best tours can help you cut through the controlled chaos that typifies India, so you can get the chance to enjoy Darjeelings famous tea and Bengali sweets, explore ornate temples and Hindu mythology and take in the sunrise over the Himalayas.',
      imageUrl: '../assets/hotels/india.jpeg',
      price: 65000 

    },
    {
      id: 5,
      name: 'Faraway Family Adventure',
      destination: 'Istanbul',
      description: 'There s no reason the entire family wouldn t enjoy these classic Turkish experiences like bargaining in the Grand Bazaar, sailing on a gullet -- a Turkish wooden yacht -- and exploring ancient Ephesus.',
      imageUrl: '../assets/tours/instanmbul.jpeg',
      price: 45000 

    },
    {
      id: 6,
      name: 'Land of the Inca',
      destination: 'Peru',
      description: 'The Incan Trail. Machu Picchu. You need to say little more to conjure up the lost citys spectacular ruins. But with archaeological sites like the Sacred Valley, the cities of Cusco and Lima and the natural wonders of the Amazon rainforest, highlights abound..',
      imageUrl: '../assets/tours/peru.jpeg',
      price: 67000 

    },
    {
      id: 7,
      name: 'For Outdoor Adventurers',
      destination: 'Costa Rica',
      description: 'Whether youre gliding through a cloud forest on a zip-line, whitewater rafting or rappelling down waterfalls, theres plenty of adventure to be had in Costa Rica. If youre looking for “pura vida” (the good life), stay at a luxury eco-lodge, soak in natural hot springs and stroll by an active volcano.',
      imageUrl: '../assets/tours/costarica.jpeg',
      price: 89000 

    },
    {
      id: 8,
      name: ' The Life Aquatic',
      destination: 'Indonesia',
      description: 'If you live for underwater adventures, imagine scuba diving in paradise -- or in this case, Raja Ampat, in Indonesia s West Papua province. Sail routes once reserved for intrepid explorers and scientists to discover untouched coral, wildlife like the impressive Komodo dragon and breathtaking Hindu temples..',
      imageUrl: '../assets/tours/indonesia.jpeg',
      price: 73000 

    },
    {
      id: 9,
      name: ' Antarctic Oasis',
      destination: 'South Georgia Island',
      description: 'One of the most remote places on Earth, South Georgia is located 850 miles east of the Falkland Islands. You can cruise by more than 160 glaciers, tens of thousands of penguins on Salisbury Plain and in St. Andrews Bay, and, if you re lucky, the enormous southern elephant seal, the largest of its species...',
      imageUrl: '../assets/tours/southernGeorgia.jpeg',
      price: 76000 

    },
    {
      id: 10,
      name: 'Eco-Friendly Safaris',
      destination: 'Kenya',
      description: 'Kenya is the perfect backdrop for your dream African safari, especially if you witness the Great Migration, when over 2 million zebra, wildebeest and antelope migrate from the Serengeti National Park in Tanzania to the greener pastures of Kenya s Masari Mara National Reserve. Home to one of the largest elephant populations in East Africa, you can visit with adorable baby elephants at the David Sheldrick Wildlife Trust Elephant Orphanage...',
      imageUrl: '../assets/tours/kenya.jpeg',
      price: 73000 

    } 
  ]
  constructor() { }

  addTour(tour:Tour):void
  {
    tour.id = this.generateId()
    this.tours.push(tour)
  }

  getTours():Tour[]{
    return this.tours
  }
  getTour(id:number){
    return this.tours.find(tour => tour.id===id)
  }
  updateTour(tour:Tour){
    const index = this.tours.findIndex(t => tour.id===tour.id)
    if(index !== -1){
      this.tours[index] = tour

    }
  }
  deleteTour(id:number){
    const index = this.tours.findIndex(t => t.id===id)
    if(index!== -1){
      this.tours.splice(index,1)
    }
  }

 private generateId(){
  return this.tours.length>0 ? Math.max(...this.tours.map(tour=> tour.id)) + 1 : 1
  }
}
