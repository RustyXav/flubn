import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptySearchFormComponent } from './empty-search-form.component';

describe('EmptySearchFormComponent', () => {
  let component: EmptySearchFormComponent;
  let fixture: ComponentFixture<EmptySearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptySearchFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptySearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
