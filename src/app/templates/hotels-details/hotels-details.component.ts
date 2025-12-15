import { Component, inject, OnInit } from '@angular/core';
import { HotelsResult } from '../../services/HotelsResult';
import { ActivatedRoute } from '@angular/router';
import { DataProviderService } from '../../services/data-provider.service';
import { SearchService } from '../../services/search.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-hotels-details',
  imports: [],
  templateUrl: './hotels-details.component.html',
  styleUrl: './hotels-details.component.css',
})
export class HotelsDetailsComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private elhjrg = inject(DataProviderService);
  private dataFetcherService = inject(SearchService);
  HotelID!: number;
  hotel!: HotelsResult;
  hotelDescription!: string[];

  constructor() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.HotelID = Number(params.get('id'));
    });
  }
  async ngOnInit(): Promise<void> {
    this.hotel = await lastValueFrom(
      this.dataFetcherService.GetHotel(this.HotelID)
    );
    this.hotelDescription = await lastValueFrom(
      this.dataFetcherService.GetHotelDescription(this.HotelID)
    );
  }
}
