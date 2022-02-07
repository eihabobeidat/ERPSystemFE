import { Component, OnInit } from '@angular/core';
import { LeaveService } from 'src/app/service/AdminService/LeaveService/leave.service';

declare const exportTableToCSV: any;
declare const exportTableToExcel: any;

@Component({
  selector: 'app-employees-leave',
  templateUrl: './employees-leave.component.html',
  styleUrls: ['./employees-leave.component.css']
})

export class EmployeesLeaveComponent implements OnInit {
  displayedColumns: string[] = ['id', 'duration', 'employeeName', 'starttime',
  'endtime','type','status','comments', 'Approve'];
  //'reviewedby','approvedby',
  constructor(public service:LeaveService)
  { 
    //this.service.getAllVacation();
  }

  Approve(vacation:any,status:number) {
    //get employee id to fill both reviwed by and approved by
    let temp:string|null = localStorage.getItem('id');
    let adminId:number = parseInt( temp? temp: '82');
    vacation.reviewedby = 6;
    vacation.approvedby = adminId;
    vacation.status = status;
    this.service.vacationApprove(vacation);
  }
  getDifferenceInDays(date1:Date, date2:Date){
    return this.service.getDifferenceInDays(new Date(date1), new Date(date2));
  }

  exportToCSV(fileName: string) {
    exportTableToCSV(fileName);
  }

  exportToExcel() {
    exportTableToExcel();
  }

  printBtn() {
    exportTableToExcel();
  }

  ngOnInit(): void {
    this.service.getAllVacation();
  }
  
}
