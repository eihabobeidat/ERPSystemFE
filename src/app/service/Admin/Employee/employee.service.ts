import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EditDialogComponent } from 'src/app/Admin/Employee/edit-dialog/edit-dialog.component';
import { ListComponent } from 'src/app/Admin/Employee/list/list.component';
import { InputFiles } from 'typescript';
import { Employee } from '../Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  EmployeeList:any=[];
  file:File;
  sss:any[]=[];
  oneEmployee:any={};
  id:number;
  constructor(private http:HttpClient ) { }
  GetEmployeeInf(id:number){
    this.http.get<Employee>('https://localhost:44333/api/Employee/GetById/'+ id).
    subscribe((result)=> 
   { 
      this.oneEmployee=result
  });
  
  }
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

UpdateEmployee(form:any)
{
  console.log(form);
  this.http.put('https://localhost:44333/api/Employee/updateemployee',form).subscribe((result)=>{
   console.log(result);
  });
}
}

  