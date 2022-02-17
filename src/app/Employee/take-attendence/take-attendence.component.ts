import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { RecognitionService } from 'src/app/service/EmployeeService/employeeRecognition/recognition.service';
import { UserService } from 'src/app/service/User/user.service';

@Component({
  selector: 'app-take-attendence',
  templateUrl: './take-attendence.component.html',
  styleUrls: ['./take-attendence.component.css']
})
export class TakeAttendenceComponent implements OnInit {
  id:number;
  MonthNow:Date=new Date();
  webcamImage: WebcamImage | undefined;
  
  constructor(public service:UserService, private recognition:RecognitionService) { 

  }

  ngOnInit(): void {
  }

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
    // this.recognition.faceRecognition(webcamImage);
    console.log(this.webcamImage);
    
  }

  TakeCheckIn()
  {
    this.service.TakeCheckIn();
  }

  TakeCheckOut()
  {
    this.service.TakeCheckOut();
  }

}
