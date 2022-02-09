import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrReviewComponent } from './hr-review.component';

describe('HrReviewComponent', () => {
  let component: HrReviewComponent;
  let fixture: ComponentFixture<HrReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
