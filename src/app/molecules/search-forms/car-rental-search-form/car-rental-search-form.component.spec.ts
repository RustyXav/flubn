import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRentalSearchFormComponent } from './car-rental-search-form.component';

describe('CarRentalSearchFormComponent', () => {
  let component: CarRentalSearchFormComponent;
  let fixture: ComponentFixture<CarRentalSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarRentalSearchFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarRentalSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
