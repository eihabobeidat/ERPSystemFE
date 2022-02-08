import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  employeeCount:any={}
  vacationCount:any={}
  salarySummation:any={}
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.GetCards()
  }

  GetCards()
  {
    // Employee count
    this.http.get('https://localhost:44333/api/Employee/GetCount').subscribe((result)=>{
   this.employeeCount=result
   })
    //vacation count
   this.http.get('https://localhost:44333/api/Vacation/GetVacationCount').subscribe((result)=>{
   this.vacationCount=result
   })
   // salary summation
   this.http.get('https://localhost:44333/api/Salary/GetSalarySummation').subscribe((result)=>{
   this.salarySummation=result
   })

  }

}
