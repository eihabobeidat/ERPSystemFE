import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { number } from 'echarts';
import { EmployeeService } from 'src/app/service/EmployeeService/employee.service';

declare const exportTableToCSV: any;
declare const exportTableToExcel: any;
declare const printTable: any;

export interface IVacationList{

  employeeid:number,
  employeeName:string,
  reviewedby:number,
  approvedby:number,
  starttime:Date,
  endtime:Date,
  type:number,
  status:number,
  comments:string


}

@Component({
  selector: 'app-employee-holidays-search',
  templateUrl: './employee-holidays-search.component.html',
  styleUrls: ['./employee-holidays-search.component.css']
})
export class EmployeeHolidaysSearchComponent implements OnInit {

  searchForm = new FormGroup({
    startDate: new FormControl('',[Validators.required]),
    endDate:new FormControl('',[Validators.required]),
  })
  
  constructor(public employee:EmployeeService) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['employeeid', 'employeeName', 'reviewedby','approvedby','starttime',
  'endtime','type','status','comments'];

  formValidationCheck(){
    return this.searchForm.controls['startDate'].valid && this.searchForm.controls['endDate'].valid;
  }

  onSubmit() {
    console.log(this.searchForm.value);
    
    this.employee.HolidyasSearch(this.searchForm.value);
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
