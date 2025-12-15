import { HttpClient } from '@angular/common/http';
import { Component, inject, input, OnInit, output } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { SearchService } from '../../services/search.service';
import { HotelsResult } from '../../services/HotelsResult';
import { DataProviderService } from '../../services/data-provider.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hotel-description-overlay',
  imports: [RouterLink],
  templateUrl: './hotel-description-overlay.component.html',
  styleUrl: './hotel-description-overlay.component.css',
})
export class HotelDescriptionOverlayComponent implements OnInit {
  IsVisible = output<boolean>();
  hotel = input.required<HotelsResult>();
  paragraphs!: string[];
  hotelName!: string;
  private searchService = inject(SearchService);
  private http = inject(HttpClient);
  private dataProvider = inject(DataProviderService);

  async ngOnInit(): Promise<void> {
    this.paragraphs = await lastValueFrom(
      this.searchService.GetHotelDescription(this.hotel().id)
    );
    console.log('paragraphs received = ' + this.paragraphs);
    this.hotelName = this.hotel().name;
    this.IsVisible.emit(true);
  }

  AddToCart() {
    // activate spinner
    this.searchService.BookHotelIfAvailable(0, this.hotel());
    // check if response is ok
    this.dataProvider.AddToCart(
      this.hotel(),
      this.dataProvider.HotelSearchData.checkInDateAsString
    );

    // de-activate spinner

    // inform if OK / KO

    // close modal (what if error ?)
    this.Close();
  }
  Close() {
    console.log('close modal called');
    this.IsVisible.emit(false);
  }
}
