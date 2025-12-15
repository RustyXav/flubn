import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingTypeSelectorComponent } from './booking-type-selector.component';

describe('BookingTypeSelectorComponent', () => {
  let component: BookingTypeSelectorComponent;
  let fixture: ComponentFixture<BookingTypeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingTypeSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
