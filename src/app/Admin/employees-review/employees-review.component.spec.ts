import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesReviewComponent } from './employees-review.component';

describe('EmployeesReviewComponent', () => {
  let component: EmployeesReviewComponent;
  let fixture: ComponentFixture<EmployeesReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
