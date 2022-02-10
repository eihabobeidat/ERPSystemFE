import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpReviewComponent } from './emp-review.component';

describe('EmpReviewComponent', () => {
  let component: EmpReviewComponent;
  let fixture: ComponentFixture<EmpReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
