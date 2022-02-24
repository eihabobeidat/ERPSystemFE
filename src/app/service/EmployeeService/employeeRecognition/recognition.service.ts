import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RecognitionService {
  faceId:string;
  constructor(private http:HttpClient) {
  }

  faceRecognition(face:string)
  {
    this.http.post<any>('https://localhost:44333/api/Attendance/DetectFace',{image:face})
    .subscribe((res:any) =>{
      this.faceId=res.image
      console.log(res.image,"Result String");

    })
  }
}
