import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsPage00Component } from './results-page00.component';

describe('ResultsPage00Component', () => {
  let component: ResultsPage00Component;
  let fixture: ComponentFixture<ResultsPage00Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultsPage00Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultsPage00Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
