import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightAndHotelSearchFormComponent } from './flight-and-hotel-search-form.component';

describe('FlightAndHotelSearchFormComponent', () => {
  let component: FlightAndHotelSearchFormComponent;
  let fixture: ComponentFixture<FlightAndHotelSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightAndHotelSearchFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightAndHotelSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
