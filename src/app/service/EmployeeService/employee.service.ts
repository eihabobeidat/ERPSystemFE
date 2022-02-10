import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  vacationSearch:any[]=[]
  employeeRecord:any={}
  employeeId:number=parseInt(localStorage.getItem('id') as string)
  imagename:string
  constructor(private http:HttpClient,private toastr:ToastrService) { }

  HolidyasSearch(form:any)
  {
   let temp = {
     id: parseInt(localStorage.getItem('id') as string),
     startdate: form.startDate,
     enddate:form.endDate
   }
   console.log(temp);
   
   const header = {
     "Content-Type":'application/json',
     "Accept":'Application/json'
   }
   const requestOption = {
     headers:new HttpHeaders(header),
   }
 
   this.http.post<any[]>('https://localhost:44333/api/Vacation/ByIdAndDate',temp,requestOption).subscribe((result)=>{
     this.vacationSearch=result
     console.log(this.vacationSearch);

 })
 }

 GetEmployeebyId()
 {
   this.http.get('https://localhost:44333/api/Employee/GetById/'+this.employeeId).subscribe((result)=>{
     this.employeeRecord=result
    console.log(this.employeeRecord);
    
    })
 }


 UpdateEmployeeProfile(form:any)
 {
   console.log(form);
   
  const header={
    'Content-Type':'application/json',
    'Accept':'application/json'
  }
  const requestoption={
    headers:new HttpHeaders(header)
  }

  this.http.put('https://localhost:44333/api/Employee/updateemployee',form,requestoption).subscribe((result)=>{

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

}