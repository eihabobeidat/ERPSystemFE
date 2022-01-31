import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IPage } from './IPage';
import { IService } from './IService';


@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http:HttpClient) { }
  private headerDict = {
    'Content-Type' : 'application/json',
    'Accept':'application/json'
  };
  private requestOptions={
    headers: new HttpHeaders(this.headerDict)
  };
  aboutValue?:string;
  aboutServices:IService[] = [];
  GetPage(id:number){
    this.http.get<IPage>("https://localhost:44333/api/Page/GetById/"+id,this.requestOptions)
    .subscribe((result)=>{
    this.aboutValue = result.value;
    console.log(this.aboutValue);
    },(error)=> {return error});
  }
  GetServices(){
    this.http.get<IService[]>("https://localhost:44333/api/AboutService",this.requestOptions)
    .subscribe((result)=>{
      this.aboutServices = result;
    });
  }
}