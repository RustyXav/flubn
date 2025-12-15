import { BookingPageComponent } from './organisms/booking-page/booking-page.component';
import { HomePageComponent } from './templates/home-page/home-page.component';
import { LoginPageComponent } from './templates/login-page/login-page.component';
import { NotFoundPageComponent } from './templates/not-found-page/not-found-page.component';
import { Routes } from '@angular/router';
import { HotelSearchFormComponent } from './molecules/search-forms/hotel-search-form/hotel-search-form.component';
import { FlightSearchFormComponent } from './molecules/search-forms/flight-search-form/flight-search-form.component';
import { FlightAndHotelSearchFormComponent } from './molecules/search-forms/flight-and-hotel-search-form/flight-and-hotel-search-form.component';
import { SelfCateringSearchFormComponent } from './molecules/search-forms/self-catering-search-form/self-catering-search-form.component';
import { CruiseSearchFormComponent } from './molecules/search-forms/cruise-search-form/cruise-search-form.component';
import { CarRentalSearchFormComponent } from './molecules/search-forms/car-rental-search-form/car-rental-search-form.component';
import { ResultsPage00Component } from './templates/results-page00/results-page00.component';
import { NominatimTestComponent } from './delete_later/nominatim-test/nominatim-test.component';
import { EmptySearchFormComponent } from './molecules/search-forms/empty-search-form/empty-search-form.component';
import { HomeContentComponent } from './organisms/home-content/home-content.component';
import { CartPageComponent } from './templates/cart-page/cart-page.component';
import { CheckoutComponent } from './templates/checkout/checkout.component';
import { HotelsDetailsComponent } from './templates/hotels-details/hotels-details.component';

export const homeRoutePath = '';
export const bookingRoutePath = 'booking';

console.log('before routes def');
export const routes: Routes = [
  {
    path: homeRoutePath,
    component: HomePageComponent,
    children: [
      { path: '', component: HomeContentComponent },
      { path: 'hotels/:id', component: HotelsDetailsComponent },
      {
        path: bookingRoutePath,
        component: BookingPageComponent,
        children: [
          {
            path: 'hotels',
            component: HotelSearchFormComponent,
            data: { label: 'hotel' },
          },

          {
            path: 'flights',
            component: FlightSearchFormComponent,
            data: { label: 'flight' },
          },
          {
            path: 'flight + hotel',
            component: FlightAndHotelSearchFormComponent,
            data: { label: 'flight & hotel' },
          },
          {
            path: 'self catering',
            component: SelfCateringSearchFormComponent,
            data: { label: 'self catering' },
          },
          {
            path: 'cruises',
            component: CruiseSearchFormComponent,
            data: { label: 'cruise' },
          },
          {
            path: 'car rental',
            component: CarRentalSearchFormComponent,
            data: { label: 'rent a car' },
          },
          { path: '', component: EmptySearchFormComponent },
        ],
      },
      { path: 'searchResults', component: ResultsPage00Component },
    ],
  },
  { path: 'testnominatim', component: NominatimTestComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'cart/checkout/1', component: CheckoutComponent },
  { path: 'login', component: LoginPageComponent, data: { label: 'LOGIN' } },
  { path: '**', component: NotFoundPageComponent },
];
