import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidaysSearchComponent } from './holidays-search.component';

describe('HolidaysSearchComponent', () => {
  let component: HolidaysSearchComponent;
  let fixture: ComponentFixture<HolidaysSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidaysSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidaysSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
