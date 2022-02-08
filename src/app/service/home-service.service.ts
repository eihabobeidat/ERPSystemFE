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
      //console.log(this.sliderImage);
      


      })
   
  }
  getCellImage(){
    this.http.get<ICells>('https://localhost:44333/api/Cell/Getimage')
    .subscribe((result:any)=>{
      this.cellsImage=result;
     console.log(this.cellsImage);

      })
   
  }
  getTopTenEmployee()
  {
    this.http.get<ITopTenEmployee[]>('https://localhost:44333/api/Review/GetTopTenEmployee')
    .subscribe((result)=>{
      result.forEach((x)=>{
        this.topTenEmployee.push(x)
        
      })
    })
    //console.log(this.topTenEmployee);
  }


   getHomeTestimonial()
   {
     this.http.get<ITestimonial[]>('https://localhost:44333/api/Testimonial/GetHomeTestimonial')
     .subscribe((result)=>{
       result.forEach((x)=>{
         if(x.status==1)
         {
           this.testimonial.push(x)
         }
       })
  //  console.log(this.testimonial.length);

  //  console.log(this.testimonial);

   //this.toastr.success("All data retreived","Get data")
   
   })
   }
}
