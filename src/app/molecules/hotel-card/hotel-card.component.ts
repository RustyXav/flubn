import { Component, inject, input, OnInit, output } from '@angular/core';
import { HotelsResult } from '../../services/HotelsResult';
import { CurrencyPipe } from '@angular/common';
import { lastValueFrom } from 'rxjs';
import { SearchService } from '../../services/search.service';
import { CurrencyService } from '../../services/currency.service';
import { DataProviderService } from '../../services/data-provider.service';

@Component({
  selector: 'app-hotel-card',
  imports: [CurrencyPipe],
  templateUrl: './hotel-card.component.html',
  styleUrl: './hotel-card.component.css',
})
export class HotelCardComponent implements OnInit {
  HotelDescription!: string[];
  private searchService = inject(SearchService);
  currencyService = inject(CurrencyService);
  HotelInformations = input.required<HotelsResult>();
  HotelClicked = output<HotelsResult>();
  private dataProvider = inject(DataProviderService);

  async ngOnInit(): Promise<void> {
    this.HotelDescription = await lastValueFrom(
      this.searchService.GetHotelDescription(this.HotelInformations().id)
    );
  }

  AddToCart($event: Event) {
    $event.stopPropagation();
    // activate spinner
    this.searchService.BookHotelIfAvailable(0, this.HotelInformations());
    // check if response is ok
    this.dataProvider.AddToCart(
      this.HotelInformations(),
      this.dataProvider.HotelSearchData.checkInDateAsString
    );

    // de-activate spinner

    // inform if OK / KO
  }

  OnHotelClicked() {
    this.HotelClicked.emit(this.HotelInformations());
  }
}
