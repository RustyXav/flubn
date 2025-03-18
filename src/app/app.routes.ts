import { BookingPageComponent } from "./organisms/booking-page/booking-page.component";
import { HomePageComponent } from './templates/home-page/home-page.component';
import { LoginPageComponent } from './templates/login-page/login-page.component';
import { NotFoundPageComponent } from './templates/not-found-page/not-found-page.component';
import { Routes } from '@angular/router';
import { HotelSearchFormComponent } from "./molecules/hotel-search-form/hotel-search-form.component";
import { FlightSearchFormComponent } from "./molecules/flight-search-form/flight-search-form.component";
import { FlightAndHotelSearchFormComponent } from "./molecules/flight-and-hotel-search-form/flight-and-hotel-search-form.component";
import { SelfCateringSearchFormComponent } from "./molecules/self-catering-search-form/self-catering-search-form.component";
import { CruiseSearchFormComponent } from "./molecules/cruise-search-form/cruise-search-form.component";
import { CarRentalSearchFormComponent } from "./molecules/car-rental-search-form/car-rental-search-form.component";


export const homeRoutePath = '';
export const bookingRoutePath = 'booking';

console.log('before routes def');
export const routes: Routes = [
    {
        path: homeRoutePath, component: HomePageComponent, data: { label: "HOME" }, children: [
            {
                path: bookingRoutePath, component: BookingPageComponent, data: { label: "BOOKINGZ" }, children: [
                    { path: 'hotels', component: HotelSearchFormComponent, data: { label: "HotelsZ" } },
                    { path: 'flights', component: FlightSearchFormComponent, data: { label: "FlightsZ" } },
                    { path: 'flight + hotel', component: FlightAndHotelSearchFormComponent, data: { label: "FLIGHT & HOTEL" } },
                    { path: 'self catering', component: SelfCateringSearchFormComponent, data: { label: "SELF CATERING" } },
                    { path: 'cruises', component: CruiseSearchFormComponent, data: { label: "CRUISES" } },
                    { path: 'car rental', component: CarRentalSearchFormComponent, data: { label: "RENT A CAR" } }
                ]
            }
        ]
    },
    { path: 'login', component: LoginPageComponent, data: { label: "LOGIN" } },
    { path: '**', component: NotFoundPageComponent }
];


 

// export const MyOwnRoutesDatas: RouteMappingData[] = [
//     { path: ''  ,                         component: HomeContentComponent  ,                         label: 'HOME' }  ,
//     { path: 'main00'  ,                         component: MainContent00Component  ,                         label: 'MAIN 00' }  ,
//     { path: 'main01'  ,                         component: MainContent01Component  ,                         label: 'MAIN 01' }  ,
// ];


// { path: 'Locations'  ,                         component :              ,                         label: 'Locations'; }  ,
// { path: 'Hot deals'  ,                         component :              ,                         label: 'Hot deals'; }  ,
// { path: 'Pages'  ,                         component :              ,                         label: 'Pages'; }  ,
// { path: 'Contact'  ,                         component :              ,                         label: 'Contact'; }  ,
// { path: 'Blog'  ,                         component :              ,                         label: 'Blog'; }  ,
// { path: 'Purchase'  ,                         component :              ,                         label: 'Purchase'; }  ,                        
