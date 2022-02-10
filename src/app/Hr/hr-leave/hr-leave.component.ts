import { Component, OnInit } from '@angular/core';
import { HrLeaveService } from 'src/app/service/HrService/LeaveService/hr-leave.service';

declare const exportTableToCSV: any;
declare const exportTableToExcel: any;
declare const printTable: any;

@Component({
  selector: 'app-hr-leave',
  templateUrl: './hr-leave.component.html',
  styleUrls: ['./hr-leave.component.css']
})
export class HrLeaveComponent implements OnInit {
  displayedColumns: string[] = ['id', 'duration', 'employeeName', 'starttime',
  'endtime','type','status','comments', 'Approve'];

  constructor(public service:HrLeaveService) {}

  Approve(vacation:any,status:number) {
    //get employee id to fill both reviwed by and approved by
    let temp:string|null = localStorage.getItem('id');
    let hrId:number = parseInt( temp? temp: '145');
    vacation.reviewedby = 5;
    vacation.approvedby = hrId;
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
    printTable();
  }

  ngOnInit(): void {
    this.service.getAllVacation();
  }

}
