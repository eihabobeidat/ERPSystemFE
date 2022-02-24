import { TestBed } from '@angular/core/testing';

import { PermissionSGuard } from './permission-s.guard';

describe('PermissionSGuard', () => {
  let guard: PermissionSGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermissionSGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
