import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormZZZComponent } from './form-zzz.component';

describe('FormZZZComponent', () => {
  let component: FormZZZComponent;
  let fixture: ComponentFixture<FormZZZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormZZZComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormZZZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
