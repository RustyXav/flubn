import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CruiseSearchFormComponent } from './cruise-search-form.component';

describe('CruiseSearchFormComponent', () => {
  let component: CruiseSearchFormComponent;
  let fixture: ComponentFixture<CruiseSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CruiseSearchFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CruiseSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
