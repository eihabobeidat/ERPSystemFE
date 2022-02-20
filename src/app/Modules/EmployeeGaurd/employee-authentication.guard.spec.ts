import { TestBed } from '@angular/core/testing';

import { EmployeeAuthenticationGuard } from './employee-authentication.guard';

describe('EmployeeAuthenticationGuard', () => {
  let guard: EmployeeAuthenticationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmployeeAuthenticationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
