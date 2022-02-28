import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IVacation } from 'src/app/service/AdminService/LeaveService/IVacation';
import { LeaveService } from 'src/app/service/AdminService/LeaveService/leave.service';

declare const exportTableToCSV: any;
declare const exportTableToExcel: any;
declare const printTable: any;


@Component({
  selector: 'app-employees-leave',
  templateUrl: './employees-leave.component.html',
  styleUrls: ['./employees-leave.component.css']
})

export class EmployeesLeaveComponent implements OnInit {
  displayedColumns: string[] = ['id', 'duration', 'employeeName', 'starttime',
  'endtime','type','filepath','comments', 'Approve'];
  //'reviewedby','approvedby',
  constructor(public service:LeaveService, private http:HttpClient, private toaster:ToastrService)
  { 
    
  }

  Approve(vacation:any,status:number) {
    this.http.get<IVacation>('https://localhost:44333/api/Vacation/' + vacation.id)
    .subscribe( res => {
      //get employee id to fill both reviwed by and approved by
      let temp:string|null = localStorage.getItem('id');
      let adminId:number = parseInt( temp? temp: '82');
      vacation.reviewedby = 6;
      vacation.approvedby = adminId;
      vacation.status = status;
      vacation.filepath = res.filepath;
      this.service.vacationApprove(vacation);
    }, err => {
      this.toaster.error('Something went wrong','Submition failed');
      this.service.getAllVacation();
    })
    
  }
  getDifferenceInDays(date1:Date, date2:Date){
    return this.service.getDifferenceInDays(new Date(date1), new Date(date2));
  }

 

  ngOnInit(): void {
    this.service.getAllVacation();
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
 
}
