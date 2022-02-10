import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrNavComponent } from './hr-nav.component';

describe('HrNavComponent', () => {
  let component: HrNavComponent;
  let fixture: ComponentFixture<HrNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
