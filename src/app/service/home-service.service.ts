import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITestimonial } from './ITestimonial';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
testimonial:any[]=[]
  constructor(private http:HttpClient) 
  {

   }


   getHomeTestimonial()
   {
     this.http.get<ITestimonial[]>('https://localhost:44333/api/Testimonial/GetHomeTestimonial').subscribe((result)=>{
       result.forEach((x)=>{
         if(x.status==1)
         {
           this.testimonial.push(x)
         }
       })
   console.log(this.testimonial);
   //this.toastr.success("All data retreived","Get data")
   
   })
   }
}
