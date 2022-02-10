import { TestBed } from '@angular/core/testing';

import { HrLeaveService } from './hr-leave.service';

describe('HrLeaveService', () => {
  let service: HrLeaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrLeaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
