import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from 'src/app/service/AdminService/admin.service';

@Component({
  selector: 'app-info-salary',
  templateUrl: './info-salary.component.html',
  styleUrls: ['./info-salary.component.css']
})
export class InfoSalaryComponent implements OnInit {
  displayedColumns: string[] = ['employeeId', 'comments', 'time','doneBy','value']
  name:string;
  constructor(public service:AdminService,public matdialog: MatDialog ,@Inject(MAT_DIALOG_DATA)public data:{id:number,firstName:string,lastName:string}) {
   this.name=this.data.firstName+" " +this.data.lastName;
  
  }

  ngOnInit(): void {
  }

  
  closeDialogBox(){
    this.matdialog.closeAll();
  }

}
