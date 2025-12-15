import { Component, inject } from '@angular/core';
import { bookingRoutePath, homeRoutePath } from '../../../app.routes';
import { NavigationEnd, Router } from '@angular/router';
import { BookingSelectorRadioComponent } from '../../../atoms/booking-selector-radio/booking-selector-radio.component';

@Component({
  selector: 'app-booking-type-selector',
  imports: [BookingSelectorRadioComponent],
  templateUrl: './booking-type-selector.component.html',
  styleUrl: './booking-type-selector.component.css',
})
export class BookingTypeSelectorComponent {
  constructor() {
    this.router.events.subscribe((routerEvent) => {
      if (routerEvent instanceof NavigationEnd) {
        this.SetBookingOptionsChecked(routerEvent.urlAfterRedirects);
      }
    });
    // don't forget to set once after subscribing to url change
    this.SetBookingOptionsChecked(this.router.url);
  }

  router: Router = inject(Router);
  bookingOptions = this.GetBookingOptions();

  GetBookingOptions() {
    const retVal = [];
    const filtered0 = this.router.config.filter(
      (route) => route.path === homeRoutePath
    );
    if (filtered0 && filtered0.length === 1) {
      const homeRoute = filtered0[0];
      if (homeRoute && homeRoute.children) {
        const filtered1 = homeRoute.children.filter(
          (route) => route.path === bookingRoutePath
        );
        if (filtered1 && filtered1.length === 1) {
          const bookingRoute = filtered1[0];
          if (bookingRoute && bookingRoute.children) {
            retVal.push(
              ...bookingRoute.children
                .filter(
                  (route) =>
                    route.data?.['label'] &&
                    route.path?.length &&
                    route.path.length > 0
                )
                .map((route) => ({
                  label: route.data?.['label'],
                  relativePath:
                    encodeURIComponent(homeRoutePath) +
                    '/' +
                    encodeURIComponent(bookingRoutePath) +
                    '/' +
                    encodeURIComponent(route.path ?? ''),
                  checked: false,
                }))
            );
          }
        }
      }
    }
    return retVal;
  }

  SetBookingOptionsChecked(currentURL: string) {
    const filteredBookingOptions = this.bookingOptions.filter(
      (bookingOption) => bookingOption.relativePath === currentURL
    );
    if (filteredBookingOptions.length > 1) {
      throw new Error('too much matching path in booking type selector');
    }

    if (filteredBookingOptions.length) {
      this.bookingOptions
        .filter((bookingOption) => bookingOption != filteredBookingOptions[0])
        .forEach((b) => (b.checked = false));
      filteredBookingOptions[0].checked = true;
    }
  }

  radioChange(url: string) {
    this.router.navigateByUrl(url);
  }
}
