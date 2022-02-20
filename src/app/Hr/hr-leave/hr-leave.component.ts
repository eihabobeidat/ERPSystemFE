import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IVacation } from 'src/app/service/AdminService/LeaveService/IVacation';
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

  constructor(public service:HrLeaveService, private http:HttpClient, private toaster: ToastrService) {}

  Approve(vacation:any,status:number) {
    this.http.get<IVacation>('https://localhost:44333/api/Vacation' + vacation.id)
    .subscribe(res => {
      //get employee id to fill both reviwed by and approved by
    let temp:string|null = localStorage.getItem('id');
    let hrId:number = parseInt( temp? temp: '145');
    vacation.reviewedby = 5;
    vacation.approvedby = hrId;
    vacation.status = status;
    vacation.filepath = res.filepath;
    this.service.vacationApprove(vacation);
    }, err => {
      this.toaster.error('Something went wrong','Submission failed');
      this.service.getAllVacation();
    })
    
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
