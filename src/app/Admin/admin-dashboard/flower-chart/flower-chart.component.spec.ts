import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerChartComponent } from './flower-chart.component';

describe('FlowerChartComponent', () => {
  let component: FlowerChartComponent;
  let fixture: ComponentFixture<FlowerChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowerChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
