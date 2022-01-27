import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavbarComponentComponent } from './main-navbar-component.component';

describe('MainNavbarComponentComponent', () => {
  let component: MainNavbarComponentComponent;
  let fixture: ComponentFixture<MainNavbarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNavbarComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavbarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
