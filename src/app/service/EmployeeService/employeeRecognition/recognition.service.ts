import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RecognitionService {
  
  constructor(private http:HttpClient) {
  }

  faceRecognition(face:string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0XZzpl5eNQ2ISi_Xa_qFm0ZuGeRaERQrQPQ&usqp=CAU')
  {
    this.http.post('https://localhost:44333/api/Attendance/DetectFace',{image:face})
    .subscribe(res =>{
      console.log('finished');
    })
  }
}
