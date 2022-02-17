import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/service/AdminService/admin.service';

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
  selector: 'app-holidays-search',
  templateUrl: './holidays-search.component.html',
  styleUrls: ['./holidays-search.component.css']
})
export class HolidaysSearchComponent implements OnInit {
  searchForm = new FormGroup({
    startDate: new FormControl('',[Validators.required]),
    endDate:new FormControl('',[Validators.required]),
  })
  
  constructor(public admin:AdminService) {
    
    
   }
  
   
  ngOnInit(): void {
   
    
    
  }
  
  displayedColumns: string[] = ['employeeid', 'employeeName', 'reviewedby','approvedby','starttime',
  'endtime','type','status','comments'];
  
  
  formValidationCheck(){
    return this.searchForm.controls['startDate'].valid && this.searchForm.controls['endDate'].valid;
  }

  onSubmit() {
    this.admin.HolidyasSearch(this.searchForm.value);
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
