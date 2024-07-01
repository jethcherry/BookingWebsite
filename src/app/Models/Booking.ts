export interface Booking {
  id: number;
  HotelId?:number
  tourId?: number;
  name: string;
  email: string;
  phone: string;
  checkout:number
  checkin: number;

}
