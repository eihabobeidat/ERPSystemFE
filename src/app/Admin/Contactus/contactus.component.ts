import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/AdminService/admin.service';

export interface IContactList{

  email:string,
  description:string,
  time:Date

}


declare const exportTableToCSV: any;
declare const exportTableToExcel: any;
declare const printTable: any;


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})

export class ContactusComponent implements OnInit {

  constructor(public admin:AdminService) 
  { 
    this.admin.GetContactUs()
  }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['email', 'description', 'time'];

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
