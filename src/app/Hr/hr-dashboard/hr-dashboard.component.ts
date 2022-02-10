import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
export interface temp{
  salarySummation:number
}
@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.css']
})
export class HrDashboardComponent implements OnInit {

  employeeCount:any={}
  vacationCount:any={}
  salarySummation:any={}

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Employee count
    this.http.get('https://localhost:44333/api/Employee/GetCount').subscribe((result)=>{
      this.employeeCount=result
    });
    //vacation count
    this.http.get('https://localhost:44333/api/Vacation/GetVacationCount').subscribe((result)=>{
      this.vacationCount=result
    });
    // salary summation
    this.http.get<temp>('https://localhost:44333/api/Salary/GetSalarySummation').subscribe((result:temp)=>{
      result.salarySummation *= 30*8;
      this.salarySummation=result;
    });
  }

}
