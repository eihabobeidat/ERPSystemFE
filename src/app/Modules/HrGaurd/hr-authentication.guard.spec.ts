import { TestBed } from '@angular/core/testing';

import { HrAuthenticationGuard } from './hr-authentication.guard';

describe('HrAuthenticationGuard', () => {
  let guard: HrAuthenticationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HrAuthenticationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
