import { HotelsResult } from './HotelsResult';

export class CartElement {
  hotel!: HotelsResult;
  checkInDateAsString!: string;
  ID!: number;

  constructor(hotel: HotelsResult, checkInDateAsString: string, id: number) {
    this.hotel = hotel;
    this.checkInDateAsString = checkInDateAsString;
    this.ID = id;
  }
}
