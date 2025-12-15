import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominatimTestComponent } from './nominatim-test.component';

describe('NominatimTestComponent', () => {
  let component: NominatimTestComponent;
  let fixture: ComponentFixture<NominatimTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NominatimTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NominatimTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
