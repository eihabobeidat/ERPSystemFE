import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { WebcamImage } from 'ngx-webcam';
import { RecognitionService } from 'src/app/service/EmployeeService/employeeRecognition/recognition.service';
import { UserService } from 'src/app/service/User/user.service';

@Component({
  selector: 'app-take-attendence',
  templateUrl: './take-attendence.component.html',
  styleUrls: ['./take-attendence.component.css']
})
@Injectable()
export class TakeAttendenceComponent{
  private readonly IMGUR_UPLOAD_URL = 'https://api.imgur.com/3/image';
  private readonly clientId = '5999e2155ec5874';
  CheckInFlag:boolean=true;
  id:number;
  MonthNow:Date=new Date();
  webcamImage: WebcamImage | undefined;
  
  constructor(public http:HttpClient,
     public service:UserService,
      private recognition:RecognitionService,
      private toast:ToastrService) { 
  }

  ngOnInit(): void {
  }

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;  
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Client-ID ${this.clientId}`
      }),
    };

    const formData = new FormData();
    formData.append('image', this.webcamImage.imageAsBase64);
    this.http.post(`${this.IMGUR_UPLOAD_URL}`, formData, httpOptions).subscribe((result:any)=>{
      console.log(result.data.link);
      this.recognition.faceRecognition(result.data.link);
      setTimeout(() => {
        this.TakeCheckIn();
      }, 3000);

    })

    
       

  }

  TakeCheckIn()
  {
    if((localStorage.getItem('email') as string).indexOf(this.recognition.faceId)!== -1){
    this.CheckInFlag=false;
    this.service.TakeCheckIn();
  }
  else
  {
    this.toast.warning("Try Again","Recognition Faild")
  }
  }

  TakeCheckOut()
  {
  
      this.service.TakeCheckOut();
      this.CheckInFlag=true;
  
  
  }

}
