import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { aboutClass } from 'src/app/Admin/about-manage/aboutClass';
import { IEmployee } from 'src/app/Admin/admin-dashboard/admin-dashboard.component';
// import { IVacationList } from './IVacationList';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  vacationSearch:any[]=[]
  ContactUs:any[]=[]
  Testimonial:any=[]
  userimage:string
  allEmployeeSalary:any=[{}]
  SalaryChanges:any=[{}]
  imageSlider:any=[{}]
  employeeId:number=parseInt(localStorage.getItem('id') as string)
  empname:string
  constructor(private http: HttpClient,private toaster:ToastrService ) { }


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

})
}

ReloadImage(){
  this.userimage= localStorage.getItem('imagename') as string;
  if(localStorage.getItem('imagename') == 'null')
    {
    this.http.get<IEmployee>('https://localhost:44333/api/Employee/GetById/'+this.employeeId).subscribe((result:IEmployee)=>{
     this.empname=result.firstname +" "+ result.lastname     
    })
  }

  
}

GetContactUs()
{
  this.http.get<any[]>('https://localhost:44333/api/ContactUs').subscribe((result)=>{
    this.ContactUs=result
    
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
UploadImageSlider(form:FormData):any{
  console.log(form);
  const header={
    'Content-Type':'application/json'
  }
  const requestoption={
    headers:new HttpHeaders(header)
  }
  this.http.post('https://localhost:44333/api/Slider/postslider',form)
  .subscribe((result:any)=>{
    this.toaster.success("Slider Updated","Update");

 }
 , error=>{console.log(error);}
 
 );

}

UpdateAbout(form:FormData)
{
  this.http.put('https://localhost:44333/api/AboutService/updateabout',form).
  subscribe((result)=>{
   this.toaster.success("Updated Success","Update");
   
  });

}

UpdateCell(formdata:FormData)
{
    
  this.http.put('https://localhost:44333/api/Cell/putcell',formdata).
  subscribe((result)=>{
   this.toaster.success("Cell Image Updated","Update")
   
  });

}
getAllSalary(){
  this.http.get('https://localhost:44333/api/Employee/employeelist').subscribe((result)=>{

  this.allEmployeeSalary=result;

  });
}
GetSalaryChangesById(id:number){
  console.log(id);
  this.http.get('https://localhost:44333/api/SalaryChanges/GetByEmployeeId/'+id).subscribe((result)=>{

  this.SalaryChanges=result;

  });
}
EditSalary(obj:any)
{
  const header={
    'Content-Type':'application/json'
  }
  const requestoption={
    headers:new HttpHeaders(header)
  }
  console.log(obj);
  this.http.post<any>('https://localhost:44333/api/SalaryChanges/Insert',obj).
  subscribe((result)=>{
    this.toaster.success('Salary Changed','Done !');
  });
}

GetAllImage(){
  this.http.get('https://localhost:44333/api/Slider/getallimage').subscribe((result)=>{
    this.imageSlider=result;
    

  });
}

}









