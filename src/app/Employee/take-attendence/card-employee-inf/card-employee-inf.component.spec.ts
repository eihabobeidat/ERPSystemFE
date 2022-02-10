import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEmployeeInfComponent } from './card-employee-inf.component';

describe('CardEmployeeInfComponent', () => {
  let component: CardEmployeeInfComponent;
  let fixture: ComponentFixture<CardEmployeeInfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEmployeeInfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEmployeeInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
