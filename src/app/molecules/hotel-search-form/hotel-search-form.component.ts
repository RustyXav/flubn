import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchModel00 } from '../search-model00';

@Component({
  selector: 'app-hotel-search-form',
  imports: [FormsModule],
  templateUrl: './hotel-search-form.component.html',
  styleUrl: './hotel-search-form.component.css'
})
export class HotelSearchFormComponent {
  OnSubmit() {
    console.log("search have been submitted with data : ");
    console.log(this.model);


  }

  model = new SearchModel00();
}
