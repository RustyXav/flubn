import { Component, inject, input, model } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-selector-radio',
  imports: [],
  templateUrl: './booking-selector-radio.component.html',
  styleUrl: './booking-selector-radio.component.css'
})
export class BookingSelectorRadioComponent {
  RelativePath = input.required<string>();
  ID = input.required<number>();
  Checked = model.required<boolean>();
  Label = input.required<string>();
  router = inject(Router);
  radioChange() {
    this.router.navigateByUrl(this.RelativePath());
  }

}
