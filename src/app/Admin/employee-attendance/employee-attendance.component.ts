import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AttendanceService } from 'src/app/service/AdminService/AttendanceService/attendance.service';

declare const exportTableToCSV: any;
declare const exportTableToExcel: any;
declare const printTable: any;

export interface IAttendance{

  employeeid:number,
  checkin:string,
  checkout:string,
 
}

@Component({
  selector: 'app-employee-attendance',
  templateUrl: './employee-attendance.component.html',
  styleUrls: ['./employee-attendance.component.css']
})
export class EmployeeAttendanceComponent implements OnInit {

  employeeattendance= new FormGroup({
    employeeId:new FormControl('',[Validators.required])
    });
  constructor(public service:AttendanceService) { }

  ngOnInit(): void {
    
  }

  displayedColumns: string[] = ['employeeid','checkin', 'checkout'];

  attendance()
  {
    this.service.GetEmployeeAttendance(this.employeeattendance.value.employeeId)
    this.employeeattendance.reset()
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
