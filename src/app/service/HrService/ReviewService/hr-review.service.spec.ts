import { TestBed } from '@angular/core/testing';

import { HrReviewService } from './hr-review.service';

describe('HrReviewService', () => {
  let service: HrReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
