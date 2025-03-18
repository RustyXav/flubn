import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContent01Component } from './main-content-01.component';

describe('MainContent01Component', () => {
  let component: MainContent01Component;
  let fixture: ComponentFixture<MainContent01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainContent01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContent01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
