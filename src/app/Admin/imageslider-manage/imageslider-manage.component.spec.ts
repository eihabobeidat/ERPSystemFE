import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesliderManageComponent } from './imageslider-manage.component';

describe('ImagesliderManageComponent', () => {
  let component: ImagesliderManageComponent;
  let fixture: ComponentFixture<ImagesliderManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesliderManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesliderManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
