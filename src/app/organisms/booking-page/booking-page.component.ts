import { Component, signal } from '@angular/core';
import { BookingTypeSelectorComponent } from '../../molecules/search-forms/booking-type-selector/booking-type-selector.component';
import { RouterOutlet } from '@angular/router';
import { CarouselComponent } from '../carousel/carousel.component';
import { ValidatableForm } from '../../molecules/search-forms/ValidatableForm';

@Component({
  selector: 'app-booking-page',
  imports: [BookingTypeSelectorComponent, RouterOutlet, CarouselComponent],
  templateUrl: './booking-page.component.html',
  styleUrl: './booking-page.component.css',
})
export class BookingPageComponent {
  isSearchValid = signal(true);

  onFormActivate(component: unknown) {
    (component as ValidatableForm).ValidityChange.subscribe((valid) =>
      this.isSearchValid.set(valid)
    );
  }
}
