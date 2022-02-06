import { Component, OnInit } from '@angular/core';
import { LeaveService } from 'src/app/service/AdminService/LeaveService/leave.service';

@Component({
  selector: 'app-employees-leave',
  templateUrl: './employees-leave.component.html',
  styleUrls: ['./employees-leave.component.css']
})
export class EmployeesLeaveComponent implements OnInit {
  displayedColumns: string[] = ['id', 'employeeid', 'employeeName', 'starttime',
  'endtime','type','status','comments', 'Approve'];
  //'reviewedby','approvedby',
  constructor(public service:LeaveService)
  { 
    //this.service.getAllVacation();
  }

  Approve(vacation:any,status:number) {
    //get employee id to fill both reviwed by and approved by
    let temp:string|null = localStorage.getItem('id');
    let adminId:number = parseInt( temp? temp: '45');
    vacation.reviewedby = 6;
    vacation.approvedby = adminId;
    vacation.status = status;
    this.service.vacationApprove(vacation);
  }

  ngOnInit(): void {
    this.service.getAllVacation();
  }

}
