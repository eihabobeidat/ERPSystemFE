import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IEmployee } from 'src/app/Admin/admin-dashboard/admin-dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  vacationSearch:any[]=[]
  empname:string="sameh radad"
  employeeRecord:any={}
  employeeId:number=parseInt(localStorage.getItem('id') as string)
  imagename:string
  userimage:string
  constructor(private http:HttpClient,private toastr:ToastrService) { }

  HolidyasSearch(form:any)
  {
   let temp = {
     id: parseInt(localStorage.getItem('id') as string),
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
 
   this.http.post<any[]>('https://localhost:44333/api/Vacation/ByIdAndDate',temp,requestOption).subscribe((result)=>{
     this.vacationSearch=result
     

 })
 }

 GetEmployeebyId()
 {
   this.http.get('https://localhost:44333/api/Employee/GetById/'+this.employeeId).subscribe((result)=>{
     this.employeeRecord=result
    
    })
 }


 UpdateEmployeeProfile(form:any)
 {
   
  const header={
    'Content-Type':'application/json',
    'Accept':'application/json'
  }
  const requestoption={
    headers:new HttpHeaders(header)
  }

  this.http.put('https://localhost:44333/api/Employee/updateemployee',form,requestoption).subscribe((result)=>{
    this.toastr.success(form.firstname +" profile successfully updated","Update")    
  })
 }


 uploadimage(form:FormData)
  {
    const header={
      'Content-Type':'application/json',
      'Accept':'application/json'
    }
    const requestoption={
      headers:new HttpHeaders(header)
    }
    this.http.post('https://localhost:44333/api/Employee/UploadImage',form).subscribe((result:any)=>{
      this.imagename=result.imagepath
      console.log(this.imagename);
      this.http.get('https://localhost:44333/api/Employee/GetById/'+this.employeeId).subscribe((result:any)=>{
        result.imagepath=this.imagename
        this.UpdateEmployeeProfile(result)

      })
      this.toastr.success("image uploaded successfully","Upload")
  })

  }
  ReloadImage(){
    this.employeeId=parseInt(localStorage.getItem('id') as string)
    this.userimage= localStorage.getItem('imagename') as string;
    
    if(localStorage.getItem('imagename') === 'null' || !localStorage.getItem('imagename') )
    {
    this.http.get<IEmployee>('https://localhost:44333/api/Employee/GetById/'+this.employeeId).subscribe((result:IEmployee)=>{
     this.empname=result.firstname +" "+ result.lastname     
    })
  }


  }

  InsertTestimonial(form:any)
  {
     
   const header = {
    "Content-Type":'application/json',
    "Accept":'Application/json'
  }
  const requestOption = {
    headers:new HttpHeaders(header),
  }

  this.http.post<any[]>('https://localhost:44333/api/Testimonial',form,requestOption).subscribe((result)=>{
    this.vacationSearch=result
    this.toastr.success("Feedback inserted successfully","Insert")
  })
}
DeleteEmployee(id:number)
{
  this.http.delete('https://localhost:44333/api/Employee/'+id).subscribe((result)=>{
    this.toastr.success("Employee Deleted successfully","Delete")
});
}
}
