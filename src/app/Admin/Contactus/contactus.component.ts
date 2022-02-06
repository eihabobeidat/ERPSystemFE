import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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

  public list_product:any = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['email', 'description', 'time'];
  @ViewChild(MatPaginator) private paginator: MatPaginator;

  constructor(public admin:AdminService) 
  { 
    this.admin.GetContactUs()
    
  }

  ngOnInit(): void {
    this.get_data();
    // this.list_product=this.admin.GetContactUs() 
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

  get_data()
  {
    this.list_product.data=this.admin.GetContactUs()
  }
 
  ngAfterViewInit(): void {
    this.list_product.paginator = this.paginator;
}
}
