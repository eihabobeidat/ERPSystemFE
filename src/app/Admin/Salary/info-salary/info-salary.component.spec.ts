import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSalaryComponent } from './info-salary.component';

describe('InfoSalaryComponent', () => {
  let component: InfoSalaryComponent;
  let fixture: ComponentFixture<InfoSalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSalaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
