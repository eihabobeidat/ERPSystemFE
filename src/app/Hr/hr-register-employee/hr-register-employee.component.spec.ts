import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrRegisterEmployeeComponent } from './hr-register-employee.component';

describe('HrRegisterEmployeeComponent', () => {
  let component: HrRegisterEmployeeComponent;
  let fixture: ComponentFixture<HrRegisterEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrRegisterEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrRegisterEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
