import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICells } from './ICells';
import { ImageSlider } from './ImageSlider';
import { ITestimonial } from './ITestimonial';
import { ITopTenEmployee } from './ITopTenEmployee';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
testimonial:any[]=[];
topTenEmployee:any[]=[];
cellsImage:any=[{}];
sliderImage:any=[{}];
  constructor(private http:HttpClient) 
  {

  }
  getImageSlider()
  {
    this.http.get<ImageSlider>('https://localhost:44333/api/Slider/getslider')
    .subscribe((result:any)=>{
      this.sliderImage=result;    
      })
   
  }
  getCellImage(){
    this.http.get<ICells>('https://localhost:44333/api/Cell/Getimage')
    .subscribe((result:any)=>{
      this.cellsImage=result;

      })
   
  }
  getTopTenEmployee()
  {
    this.http.get<ITopTenEmployee[]>('https://localhost:44333/api/Review/GetTopTenEmployee')
    .subscribe((result)=>{
        this.topTenEmployee=result

    })
  }


   getHomeTestimonial()
   {
     this.testimonial=[]
     this.http.get<ITestimonial[]>('https://localhost:44333/api/Testimonial/GetHomeTestimonial')
     .subscribe((result)=>{
       result.forEach((x)=>{
         if(x.status==1)
         {
           if(x.imagePath == null)
           {
            x.imagePath="defualt.jpg"
           }
           this.testimonial.push(x)
         }
       })  
   })
   }
}
