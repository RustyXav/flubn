import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfCateringSearchFormComponent } from './self-catering-search-form.component';

describe('SelfCateringSearchFormComponent', () => {
  let component: SelfCateringSearchFormComponent;
  let fixture: ComponentFixture<SelfCateringSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelfCateringSearchFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfCateringSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
