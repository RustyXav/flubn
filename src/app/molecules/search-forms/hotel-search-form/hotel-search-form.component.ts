import { Component, inject, OnInit, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataProviderService } from '../../../services/data-provider.service';
import { ValidatableForm } from '../ValidatableForm';

@Component({
  selector: 'app-hotel-search-form',
  imports: [FormsModule],
  templateUrl: './hotel-search-form.component.html',
  styleUrl: './hotel-search-form.component.css',
})
export class HotelSearchFormComponent implements ValidatableForm, OnInit {
  ValidityChange = output<boolean>();
  router: Router = inject(Router);
  data_provider: DataProviderService = inject(DataProviderService);

  OnFormChange() {
    this.ValidityChange.emit(this.data_provider.HotelSearchData.IsValid());
  }

  OnSubmit() {
    console.log('search have been submitted with data : ');
    console.log(this.data_provider.HotelSearchData);
    this.data_provider.UpdateStorage();
    // TODO : router vers la page /booking/HotelSearch
    this.router.navigateByUrl('/searchResults');
  }

  ngOnInit(): void {
    this.OnFormChange();
  }
}
