import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaybalComponent } from './paybal.component';

describe('PaybalComponent', () => {
  let component: PaybalComponent;
  let fixture: ComponentFixture<PaybalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaybalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaybalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
