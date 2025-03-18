import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingSelectorRadioComponent } from './booking-selector-radio.component';

describe('BookingSelectorRadioComponent', () => {
  let component: BookingSelectorRadioComponent;
  let fixture: ComponentFixture<BookingSelectorRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingSelectorRadioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingSelectorRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
