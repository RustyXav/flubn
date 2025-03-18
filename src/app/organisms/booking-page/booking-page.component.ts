import { Component } from '@angular/core';
import { BookingTypeSelectorComponent } from "../../molecules/booking-type-selector/booking-type-selector.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-booking-page',
  imports: [BookingTypeSelectorComponent, RouterOutlet],
  templateUrl: './booking-page.component.html',
  styleUrl: './booking-page.component.css'
})
export class BookingPageComponent {

}
