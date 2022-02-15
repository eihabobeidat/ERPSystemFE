import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/service/AdminService/admin.service';
import { EditSalaryComponent } from '../edit-salary/edit-salary.component';
import { InfoSalaryComponent } from '../info-salary/info-salary.component';
declare const exportTableToCSV: any;
declare const exportTableToExcel: any;
declare const printTable: any;
@Component({
  selector: 'app-salary-list',
  templateUrl: './salary-list.component.html',
  styleUrls: ['./salary-list.component.css']
})
export class SalaryListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'Salary','Edit']

  constructor(public service:AdminService ,public matdialogAdd: MatDialog,
    public matdialogEdit: MatDialog,public matdialogInfo: MatDialog) {
    this.service.getAllSalary();

   }

  ngOnInit(): void {
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

  EditSalaty(id:number,firstName:string,lastName:string){
    setTimeout(() => {
      this.matdialogAdd.open(EditSalaryComponent,{data:{id:id,firstName:firstName,lastName:lastName}});

    }, 2000);

  }
  detailsSalary(id:number,firstName:string,lastName:string)
  {
    this.service.GetSalaryChangesById(id);

    setTimeout(() => {
      this.matdialogAdd.open(InfoSalaryComponent,{data:{id:id,firstName:firstName,lastName:lastName}});

    }, 2000);

  }


  

}
