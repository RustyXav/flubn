import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnifyingGlassComponent } from './magnifying-glass.component';

describe('MagnifyingGlassComponent', () => {
  let component: MagnifyingGlassComponent;
  let fixture: ComponentFixture<MagnifyingGlassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagnifyingGlassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagnifyingGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
