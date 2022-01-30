import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationComponentngComponent } from './authentication-componentng.component';

describe('AuthenticationComponentngComponent', () => {
  let component: AuthenticationComponentngComponent;
  let fixture: ComponentFixture<AuthenticationComponentngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticationComponentngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationComponentngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
