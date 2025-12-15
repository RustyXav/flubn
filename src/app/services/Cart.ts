import { CartElement } from './CartElement';
import { HotelsResult } from './HotelsResult';

export class Cart {
  booked: CartElement[] = [];

  public get TotalBookingPrice(): number {
    const totalPrice = this.booked.reduce(
      (acc, p) => acc + p.hotel.TotalPrice,
      0
    );
    return totalPrice;
  }

  Remove(id: number) {
    const index = this.booked.findIndex((item) => item.ID === id);
    if (index !== -1) {
      this.booked.splice(index, 1);
    }
  }

  Add(hotel: HotelsResult, checkInDateAsString: string) {
    const newID = Math.max(...this.booked.map((p) => p.ID)) + 1;
    this.booked.push(new CartElement(hotel, checkInDateAsString, newID));
  }
}
