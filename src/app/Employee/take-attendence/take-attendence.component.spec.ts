import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeAttendenceComponent } from './take-attendence.component';

describe('TakeAttendenceComponent', () => {
  let component: TakeAttendenceComponent;
  let fixture: ComponentFixture<TakeAttendenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeAttendenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeAttendenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
