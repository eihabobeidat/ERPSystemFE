import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutManageComponent } from './about-manage.component';

describe('AboutManageComponent', () => {
  let component: AboutManageComponent;
  let fixture: ComponentFixture<AboutManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
