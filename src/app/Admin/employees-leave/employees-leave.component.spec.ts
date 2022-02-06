import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesLeaveComponent } from './employees-leave.component';

describe('EmployeesLeaveComponent', () => {
  let component: EmployeesLeaveComponent;
  let fixture: ComponentFixture<EmployeesLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesLeaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
