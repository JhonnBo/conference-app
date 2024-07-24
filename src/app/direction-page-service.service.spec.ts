import { TestBed } from '@angular/core/testing';

import { DirectionPageServiceService } from './direction-page-service.service';

describe('DirectionPageServiceService', () => {
  let service: DirectionPageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectionPageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
