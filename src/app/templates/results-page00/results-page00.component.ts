import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { HotelsResult } from '../../services/HotelsResult';
import { SearchService } from '../../services/search.service';
import { DataProviderService } from '../../services/data-provider.service';
import { lastValueFrom } from 'rxjs';
import { HotelDescriptionOverlayComponent } from '../../molecules/hotel-description-overlay/hotel-description-overlay.component';
import * as leafletTypes from 'leaflet';
import { CurrencyService } from '../../services/currency.service';
import { HotelCardComponent } from '../../molecules/hotel-card/hotel-card.component';

leafletTypes.Icon.Default.mergeOptions({
  iconRetinaUrl: 'marker-icon-2x.png',
  iconUrl: 'marker-icon.png',
  shadowUrl: 'marker-shadow.png',
});

@Component({
  selector: 'app-results-page00',
  imports: [HotelDescriptionOverlayComponent, HotelCardComponent],
  templateUrl: './results-page00.component.html',
  styleUrl: './results-page00.component.css',
})
export class ResultsPage00Component implements OnInit, AfterViewInit {
  isOverlayVisible = signal(false);
  private dataFetcherService = inject(SearchService);
  private dataProviderService = inject(DataProviderService);
  currencyService = inject(CurrencyService);
  private hotels!: HotelsResult[];
  clickedHotel!: HotelsResult;
  private map!: leafletTypes.Map;
  displayedHotels!: HotelsResult[];
  private ResolveViewInit!: (value: void | PromiseLike<void>) => void;
  private waitForAfterViewInit = new Promise<void>((resolve) => {
    // store resolver to be able to call it later
    this.ResolveViewInit = resolve;
  });

  constructor() {
    if (this.dataProviderService.HotelSearchData) {
      console.log('search data exists :)');
    } else {
      throw new Error('No hotel search data');
    }
    // activate spinner
    console.log('a spinner should load here');
  }

  private onBoundsChanged() {
    const newBoudns = this.map.getBounds();
    this.displayedHotels = this.hotels.filter(
      (hotel) =>
        newBoudns.getNorth() > Number(hotel.lat) &&
        Number(hotel.lat) > newBoudns.getSouth() &&
        newBoudns.getEast() > Number(hotel.long) &&
        Number(hotel.long) > newBoudns.getWest() &&
        // TODO : add filter for available hotels
        true
    );
  }

  async ngOnInit(): Promise<void> {
    try {
      console.log('ngOnInit STARTS');
      this.hotels = await lastValueFrom(this.dataFetcherService.GetHotels());
      console.log('received hotels : ');
      console.log(this.hotels);

      console.log('filling fake datas ...');
      this.hotels = this.hotels.map((hotel) => {
        hotel.TotalPersons =
          this.dataProviderService.HotelSearchData.adultCount +
          this.dataProviderService.HotelSearchData.childrenCount;
        hotel.TotalRooms = this.dataProviderService.HotelSearchData.roomCount;
        hotel.TotalNights =
          this.dataProviderService.HotelSearchData.GetNightsNumber();
        hotel.TotalPrice = hotel.TotalRooms * hotel.TotalNights * hotel.price;
        return hotel;
      });
      console.log('filling done');

      await this.waitForAfterViewInit;
      this.hotels.forEach((hotel) => {
        leafletTypes
          .marker([Number(hotel.lat), Number(hotel.long)])
          .addTo(this.map);
      });

      this.map.on('moveend zoomend load', () => {
        // console.log(event);
        this.onBoundsChanged();
      });
      this.onBoundsChanged();
    } catch (error) {
      console.log(error);
    } finally {
      console.log('spinner should be unloaded here');
    }
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit STARTS');
    const baseMapURl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
    this.map = leafletTypes.map('testmap');
    leafletTypes
      .tileLayer(baseMapURl, {
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      })
      .addTo(this.map);
    // TODO : center map on searched location
    this.map = this.map.setView([48.8566, 2.3522], 10);

    this.ResolveViewInit();
  }

  ChangeOverlayVisible(isOverlayVisibleParam: boolean) {
    if (isOverlayVisibleParam) {
      // do nothing
    } else {
      this.isOverlayVisible.set(false);
    }
  }

  diplayHotelInfo(hotel: HotelsResult) {
    console.log('displaying overlay....');

    this.clickedHotel = hotel;
    this.isOverlayVisible.set(true);
  }

  AddToCart(hotel: HotelsResult) {
    this.clickedHotel = hotel;
    this.isOverlayVisible.set(true);
  }
}
