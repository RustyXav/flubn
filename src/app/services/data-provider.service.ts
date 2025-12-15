import { Injectable } from '@angular/core';
import { HotelSearchData } from './HotelSearchData';
import { Cart } from './Cart';
import { HotelsResult } from './HotelsResult';

const HotelSearchDataStorageKey = 'HSDSK';
const CurrentCartStorageKey = 'CCSK';

@Injectable({
  providedIn: 'root',
})
export class DataProviderService {
  EmptyCart() {
    this.CurrentCart.booked = [];
    this.UpdateStorage();
  }
  RemoveFromCart(id: number) {
    this.CurrentCart.Remove(id);
    this.UpdateStorage();
  }
  HotelSearchData = new HotelSearchData();
  CurrentCart = new Cart();

  constructor() {
    let storedJSON = localStorage.getItem(HotelSearchDataStorageKey);
    if (storedJSON) {
      Object.assign(this.HotelSearchData, JSON.parse(storedJSON));
    }
    storedJSON = localStorage.getItem(CurrentCartStorageKey);
    if (storedJSON) {
      Object.assign(this.CurrentCart, JSON.parse(storedJSON));
    }
  }

  AddToCart(hotel: HotelsResult, checkInDateAsString: string) {
    this.CurrentCart.Add(hotel, checkInDateAsString);
    this.UpdateStorage();
  }

  UpdateStorage() {
    const stringifiedHotelSearchData = JSON.stringify(this.HotelSearchData);
    localStorage.setItem(HotelSearchDataStorageKey, stringifiedHotelSearchData);

    const stringifiedCurrentCart = JSON.stringify(this.CurrentCart);
    localStorage.setItem(CurrentCartStorageKey, stringifiedCurrentCart);
  }
}
