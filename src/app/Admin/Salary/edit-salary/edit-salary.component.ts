import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from 'src/app/service/AdminService/admin.service';
export interface ISalaryChange{
  id:number,
  Value:number,
  Comments:string,
  EmployeeId:number,
  DoneBy:number
};
@Component({
  selector: 'app-edit-salary',
  templateUrl: './edit-salary.component.html',
  styleUrls: ['./edit-salary.component.css']
})

export class EditSalaryComponent implements OnInit {
  name:string;
  salaryChange=new FormGroup({
    value:new FormControl("",Validators.required),
    Comment:new FormControl("",Validators.required)
  });

  constructor(public service:AdminService, public matdialog: MatDialog ,@Inject(MAT_DIALOG_DATA)public data:{id:number,firstName:string,lastName:string}) {
    this.name=this.data.firstName+" " +this.data.lastName; }

  ngOnInit(): void {
  }
  closeDialogBox(){
    this.matdialog.closeAll();
  }
  EditSalary(){
    
    const obj={
      Value:this.salaryChange.controls['value'].value,
      Comments:this.salaryChange.controls['Comment'].value,
      EmployeeId:this.data.id,
      DoneBy:parseInt(localStorage.getItem('id') as string)
     
    };
    this.service.EditSalary(obj);
    this.closeDialogBox();
    setTimeout(() => {
      this.service.getAllSalary()
    }, 2500);

  }

}
