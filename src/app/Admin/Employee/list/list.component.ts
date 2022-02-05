import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/service/Admin/Employee';
import { EmployeeService } from 'src/app/service/Admin/Employee/employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  fileToUpload: File | null = null;
  fileForm = new FormGroup({
    file: new FormControl('',[Validators.required])
    
  })
  displayedColumns: string[] = ['firstname', 'email', 'mobile','address','imagepath','salary'];
  dataSource: MatTableDataSource<Employee>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public service:EmployeeService) {
    // Create 100 users
    // Assign the data to the data source for the table to render
    this.service.getEmployee();
    this.dataSource = new MatTableDataSource();
    this.dataSource.data=this.service.EmployeeList;

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
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  applyFilter(event: Event) {
const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLowerCase();

     if (this.dataSource.paginator) {
       this.dataSource.paginator.firstPage();
     }
   }
}




