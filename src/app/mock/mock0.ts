import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpParams,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { lastValueFrom, Observable, of } from 'rxjs';
import { HotelsResult } from '../services/HotelsResult';
import { inject } from '@angular/core';
import { MockData0Service } from './mock-data-0.service';

export const noopInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  console.log('request intercepted : ');
  console.log(req);
  return next(req);
};

export const fakeBackInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const mockDataService = inject(MockData0Service);
  if (req.url.endsWith('/get-hotels') && req.method === 'GET') {
    console.log('youpi request known');
    const response = new HttpResponse({
      body: GetHotelsBody(req.params, mockDataService),
      status: 200,
    });
    console.log(response);

    return of(response);
  } else if (
    req.url.endsWith('/get-hotel-description') &&
    req.method === 'GET'
  ) {
    console.log('get-hotel-description with id ' + req.params.get('hotelID'));
    const response = new HttpResponse({
      body: GetHotelDescriptionBody(),
      status: 200,
    });
    console.log(response);

    return of(response);
  } else if (req.url.endsWith('/get-hotel') && req.method === 'GET') {
    console.log('get-hotel with id ' + req.params.get('hotelID'));

    const response = new HttpResponse({
      body: GetHotelDetails(Number(req.params.get('hotelID')), mockDataService),
      status: 200,
    });
    console.log(response);

    return of(response);
  }
  return next(req);
};

async function GetHotelsBody(
  _params: HttpParams,
  mockDataService: MockData0Service
): Promise<HotelsResult[]> {
  console.log(_params);
  const response: HotelsResult[] = await lastValueFrom(
    mockDataService.HotelsResultObservable
  );
  return response;
}

function GetHotelDescriptionBody() {
  return [
    'Nestled in the heart of Provence, Hôtel de Lumière offers a seamless blend of old-world charm and modern luxury. With its sun-drenched stone façade and cascading lavender gardens, this boutique hotel invites guests to immerse themselves in the quintessential French countryside. Each room is a masterpiece of design, featuring artisanal furnishings, soft pastel hues, and floor-to-ceiling windows that frame enchanting views of rolling vineyards and golden wheat fields.',
    'Start your mornings with a gourmet breakfast served al fresco on the terrace, accompanied by the melody of birdsong and the fragrant scent of freshly baked croissants. The hotel’s Michelin-starred chef curates an exquisite dining experience, showcasing the finest Provençal ingredients paired with expertly selected local wines. As the sun sets, unwind by the infinity pool, its waters mirroring the vivid colors of the evening sky.',
    'Whether you’re exploring the charming villages nearby, embarking on a wine-tasting tour, or simply savoring the tranquility of your surroundings, Hôtel de Lumière promises an unforgettable escape. Attentive yet unobtrusive staff ensure your every need is met, creating an atmosphere of warmth and elegance. This is more than a stay—it’s an invitation to experience the soul of Provence.',
  ];
}

async function GetHotelDetails(
  hotelID: number,
  mockDataService: MockData0Service
): Promise<HotelsResult> {
  const response: HotelsResult[] = await lastValueFrom(
    mockDataService.HotelsResultObservable
  );
  const filtered = response.filter((hotel) => hotel.id === hotelID);
  return filtered[0];
}
