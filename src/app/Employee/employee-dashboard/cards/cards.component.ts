import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IVacation } from '../../../service/AdminService/LeaveService/IVacation';
import { EmployeeService } from 'src/app/service/EmployeeService/employee.service';
import { Employee } from 'src/app/service/Admin/Employee';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
 
  id:number= parseInt(localStorage.getItem('id') as string )
  acceptedvacation:number=0
  rejetedvacation:number=0
  salary:number
  constructor(public http:HttpClient) { }

  ngOnInit(): void {

    
    // vacations card
    let temp = {
      Employeeid: this.id
    }
    
    const header = {
      "Content-Type":'application/json',
      "Accept":'Application/json'
    }
    const requestOption = {
      headers:new HttpHeaders(header),
    }
  
    this.http.post<IVacation[]>('https://localhost:44333/api/Vacation/ByEmployeeId',temp,requestOption).subscribe((result)=>{
 
    result.forEach((x)=>{
        if(x.status == 1)
        {
          this.acceptedvacation=this.acceptedvacation+1
        }
        else if(x.status == 2)
        {
          this.rejetedvacation=this.rejetedvacation+1
        }
      })
        
      });

      //employee salary

      this.http.get<Employee>('https://localhost:44333/api/Employee/GetById/'+this.id)
     .subscribe((result)=>{
         this.salary=result.salary
        })


  }

}
