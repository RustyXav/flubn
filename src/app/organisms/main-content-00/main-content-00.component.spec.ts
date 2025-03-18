import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContent00Component } from './main-content-00.component';

describe('MainContent00Component', () => {
  let component: MainContent00Component;
  let fixture: ComponentFixture<MainContent00Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainContent00Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContent00Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
