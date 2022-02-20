import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weathernow:any=[];

  constructor(private http:HttpClient) { 
    setTimeout(() => {
      this.weather();

    }, 1000);
  }

  ngOnInit(): void {
  }
  weather(){
    const header={
      'x-api-key':'f5edc574937b92b780dbd09c2a19220427e72e413a0c10dee3f8a756d73dc02e',
      'Content-Type':'application/json'
    }
    const requestoption={
      headers:new HttpHeaders(header)
    }
    this.http.get<any>('https://api.ambeedata.com/weather/latest/by-lat-lng?lat=31.16368&lng=35.76204',requestoption).subscribe((res)=>{
    this.weathernow=res.data;
    } 
    );
  }

}
