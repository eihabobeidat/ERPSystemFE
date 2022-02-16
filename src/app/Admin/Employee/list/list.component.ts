import {  Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/service/Admin/Employee/employee.service';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
declare const exportTableToCSV: any;
declare const exportTableToExcel: any;
declare const printTable: any;
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  fileToUpload: File | null = null;
  fileForm = new FormGroup({
  file: new FormControl('',[Validators.required])});
    
  displayedColumns: string[] = ['id','firstname', 'email', 'mobile','adress','salary','action'];



  constructor(public service:EmployeeService,public matdialog: MatDialog,public matdialog1: MatDialog  ) {
        this.service.getEmployee();

      

  


    

  }

  
  ngOnInit() {

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
 
  openDialog(id:number){

      this.service.GetEmployeeInf(id);
  
    setTimeout(() => {
      this.matdialog.open(EditDialogComponent,{data:{id:id}});

    }, 2000);

    


  }
 
  
  openDialogDelete(id:number){

    this.matdialog1.open(DeleteDialogComponent,{data:{id:id}});


  }
  
  upload(file:any)
  {
    console.log(file);
    let uploadfile=<File> file[0]
    let formdata=new FormData()
    formdata.append('file',uploadfile,uploadfile.name)
    this.service.ImportExcel(formdata);
  }
  

 
  
  
  

  

  
}






