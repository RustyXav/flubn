import { TestBed } from '@angular/core/testing';

import { MockData0Service } from './mock-data-0.service';

describe('MockData0Service', () => {
  let service: MockData0Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockData0Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
