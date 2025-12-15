import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { HotelsResult } from './HotelsResult';
import { DataProviderService } from './data-provider.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private http = inject(HttpClient);
  private dataProvider = inject(DataProviderService);

  GetHotels() {
    const httpParams = this.getParams0();

    const url = '/get-hotels';

    return this.http.get<HotelsResult[]>(url, { params: httpParams });
  }

  private getParams0() {
    const hotelSearchData = this.dataProvider.HotelSearchData;
    let httpParams = new HttpParams();
    if (hotelSearchData.adultCount) {
      httpParams = httpParams.append('adultCount', hotelSearchData.adultCount);
    }
    httpParams = httpParams.append(
      'checkInDateAsString',
      hotelSearchData.checkInDateAsString
    );
    httpParams = httpParams.append(
      'checkOutDateAsString',
      hotelSearchData.checkOutDateAsString
    );
    if (hotelSearchData.childrenCount) {
      httpParams = httpParams.append(
        'childrenCount',
        hotelSearchData.childrenCount
      );
    }
    httpParams = httpParams.append('destination', hotelSearchData.destination);
    if (hotelSearchData.roomCount) {
      httpParams = httpParams.append('roomCount', hotelSearchData.roomCount);
    }
    return httpParams;
  }

  GetHotelDescription(id: number) {
    const httpParams = this.getParams1(id);
    const url = '/get-hotel-description';
    return this.http.get<string[]>(url, { params: httpParams });
  }

  getParams1(id: number) {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('hotelID', id);
    return httpParams;
  }

  /// steps :
  ///   0 : added in cart
  BookHotelIfAvailable(step: number, p0: HotelsResult) {
    // probably need to get the check in date directly from the hotel element
    const httpParams = this.getParams2(
      p0.id,
      step,
      p0.TotalNights,
      this.dataProvider.HotelSearchData.checkInDateAsString
    );
    const url = '/book-hotel';
    return this.http.post(url, { params: httpParams });
  }

  getParams2(
    hotelID: number,
    step: number,
    nigthsNb: number,
    checkInDateAsString: string
  ) {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('hotelID', hotelID);
    httpParams = httpParams.append('nigthsNb', nigthsNb);
    httpParams = httpParams.append('checkInDate', checkInDateAsString);
    httpParams = httpParams.append('step', step);
    // TODO : add roomid , number of persons, etc ... (at least)
    return httpParams;
  }

  GetHotel(HotelID: number) {
    const httpParams = this.getParams3(HotelID);
    const url = '/get-hotel';
    return this.http.get<HotelsResult>(url, { params: httpParams });
  }

  getParams3(hotelID: number): HttpParams {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('hotelID', hotelID);
    return httpParams;
  }
}
