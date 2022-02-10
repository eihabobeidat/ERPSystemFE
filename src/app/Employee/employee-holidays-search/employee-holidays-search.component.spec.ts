import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeHolidaysSearchComponent } from './employee-holidays-search.component';

describe('EmployeeHolidaysSearchComponent', () => {
  let component: EmployeeHolidaysSearchComponent;
  let fixture: ComponentFixture<EmployeeHolidaysSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeHolidaysSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeHolidaysSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
