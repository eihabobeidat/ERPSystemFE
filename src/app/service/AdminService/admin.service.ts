import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
// import { IVacationList } from './IVacationList';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  vacationSearch:any[]=[]
  ContactUs:any[]=[]
  Testimonial:any=[]
  constructor(private http: HttpClient,private toaster:ToastrService) { }


 HolidyasSearch(form:any)
 {
  let temp = {
    startdate: form.startDate,
    enddate:form.endDate
  }
  const header = {
    "Content-Type":'application/json',
    "Accept":'Application/json'
  }
  const requestOption = {
    headers:new HttpHeaders(header),
  }

  this.http.post<any[]>('https://localhost:44333/api/Vacation/ByDate',temp,requestOption).subscribe((result)=>{
    this.vacationSearch=result
console.log(this.vacationSearch);
// this.toaster.success('Data Retrieved successfully','Retrieve');
})
}
    

GetContactUs()
{
  this.http.get<any[]>('https://localhost:44333/api/ContactUs').subscribe((result)=>{
    this.ContactUs=result
    //console.log(this.ContactUs);
    
    })
    
}
  

GetTestimonial()
{
  this.http.get<any[]>('https://localhost:44333/api/Testimonial/GetHomeTestimonial')
  .subscribe((result)=>{
   this.Testimonial=result
   console.log(this.Testimonial);

  //  this.toaster.success('Data Retrieved successfully','Retrieve')
   
   })
}

UpdateTestimonialStatus(form:any)
{
  const header={
    'Content-Type':'application/json',
    'Accept':'application/json'
  }
  const requestoption={
    headers:new HttpHeaders(header)
  }

  this.http.put('https://localhost:44333/api/Testimonial/UpdateStatus',form,requestoption).subscribe((result)=>{
    console.log()
  })
  this.toaster.success("Updated record Successfully ","Update")
}  






 }



