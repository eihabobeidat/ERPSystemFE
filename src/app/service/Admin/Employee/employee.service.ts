import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListComponent } from 'src/app/Admin/Employee/list/list.component';
import { InputFiles } from 'typescript';
import { Employee } from '../Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  EmployeeList:any[]=[];
  file:File;
  sss:any[]=[];
  constructor(private http:HttpClient) { }

  getEmployee(){
     this.http.get<Employee[]>('https://localhost:44333/api/Employee/employeelist').subscribe
     ((result)=>{
       result.forEach((x) => {
         this.EmployeeList.push(x);
     });
       console.log(this.EmployeeList);

     })
      
    

  }

  ImportExcel(form:FormData):any
  {
    const header={
      'Content-Type':'text/plain; charset=utf-8'
    }
    const requestoption={
      headers:new HttpHeaders(header)
    }
    this.http.post('https://localhost:44333/api/Employee/importexcel',form)
    .subscribe((result:any)=>{
      console.log(result);

   }
   , error=>{console.log(error);}
   
   );
  
}
}

  