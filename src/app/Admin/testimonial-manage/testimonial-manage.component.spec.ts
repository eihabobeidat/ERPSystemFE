import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialManageComponent } from './testimonial-manage.component';

describe('TestimonialManageComponent', () => {
  let component: TestimonialManageComponent;
  let fixture: ComponentFixture<TestimonialManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
