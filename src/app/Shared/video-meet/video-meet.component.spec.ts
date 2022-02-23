import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoMeetComponent } from './video-meet.component';

describe('VideoMeetComponent', () => {
  let component: VideoMeetComponent;
  let fixture: ComponentFixture<VideoMeetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoMeetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoMeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
