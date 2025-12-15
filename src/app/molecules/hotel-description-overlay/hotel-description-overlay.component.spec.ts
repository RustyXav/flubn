import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelDescriptionOverlayComponent } from './hotel-description-overlay.component';

describe('HotelDescriptionOverlayComponent', () => {
  let component: HotelDescriptionOverlayComponent;
  let fixture: ComponentFixture<HotelDescriptionOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelDescriptionOverlayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelDescriptionOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
