import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellmanageComponent } from './cellmanage.component';

describe('CellmanageComponent', () => {
  let component: CellmanageComponent;
  let fixture: ComponentFixture<CellmanageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellmanageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
