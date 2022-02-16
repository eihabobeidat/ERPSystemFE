import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/service/EmployeeService/employee.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {
  dId:number;

  constructor(public service1:EmployeeService ,
    public matdialog: MatDialog ,@Inject(MAT_DIALOG_DATA)public data:{id:number}) {
      this.dId=data.id


     }

  ngOnInit(): void {
  }
  DeleteEmployee(){
    this.service1.DeleteEmployee(this.dId);
    this.matdialog.closeAll();
  }
  closeDialogBox(){
    this.matdialog.closeAll();
  }

}
