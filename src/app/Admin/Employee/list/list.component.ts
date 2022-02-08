import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/service/Admin/Employee';
import { EmployeeService } from 'src/app/service/Admin/Employee/employee.service';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
declare const exportTableToCSV: any;
declare const exportTableToExcel: any;
declare const printTable: any;
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit ,AfterViewInit{
  
  fileToUpload: File | null = null;
  fileForm = new FormGroup({
  file: new FormControl('',[Validators.required])
    
  })
  displayedColumns: string[] = ['imagepath','firstname', 'email', 'mobile','address','salary','Action'];

 

  constructor(public service:EmployeeService,public matdialog: MatDialog  ) {
    // Create 100 users
    // Assign the data to the data source for the table to render
    
    this.service.getEmployee();
    

  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  exportToCSV(fileName: string) {
    exportTableToCSV(fileName);
  }

  exportToExcel() {
    exportTableToExcel();
  }

  printBtn() {
    printTable();
  }
 
  openDialog(id:number){

    this.matdialog.open(EditDialogComponent,{data:{id:id}});
    


  }
  openDialogDelete(id:number){

  }
  
  upload(file:any)
  {
    console.log(file);
    let uploadfile=<File> file[0]
    let formdata=new FormData()
    formdata.append('file',uploadfile,uploadfile.name)
    this.service.ImportExcel(formdata);
  }
  ngOnInit() {

  }
 
  
  
  

  ngAfterViewInit() {
    

  }

  
}






