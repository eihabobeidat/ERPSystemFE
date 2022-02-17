import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecognitionService {

  constructor(private http:HttpClient) { }

  faceRecognition(face:any)
  {
    let body = { 
      photo: face
    }
    const header = {
      'token': "dfd990b598ad47f7a80d7f60d8025247"
    }
    const option = {
      headers:new HttpHeaders(header),
    }
    this.http.post('https://api.luxand.cloud/photo/search',body, option)
    .subscribe(res =>{
      console.log(res);
    })
    
    

  }

}
