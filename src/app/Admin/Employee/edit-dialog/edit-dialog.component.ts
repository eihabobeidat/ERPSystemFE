import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/service/Admin/Employee/employee.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
  EditEmployee = new FormGroup({
    email: new FormControl(this.service1.oneEmployee.email,[Validators.required]),
    phone: new FormControl(this.service1.oneEmployee.phone,[Validators.required]),
    firstname: new FormControl(this.service1.oneEmployee.firstname,[Validators.required]),
    lastname: new FormControl(this.service1.oneEmployee.lastname,[Validators.required]),
    address: new FormControl(this.service1.oneEmployee.address,[Validators.required]),
    password: new FormControl(this.service1.oneEmployee.password,[Validators.required])
     
    });
  
  
  constructor(public service1:EmployeeService ,
    public matdialog: MatDialog ,@Inject(MAT_DIALOG_DATA)public data:{id:number}) {
    
   

    this.service1.id=data.id;
    this.service1.GetEmployeeInf(data.id);




  }
  ngOnInit(): void {



  }
  closeDialogBox()
  {
    this.matdialog.closeAll();
  }
  
  UpdateEmployee()
  {

    let obj={
      id:this.data.id,
      email:this.EditEmployee.controls['Email'].value,
      password:this.EditEmployee.controls['password'].value,
      address:this.EditEmployee.controls['Address'].value,
      firstname:this.EditEmployee.controls['firstName'].value,
      lastname:this.EditEmployee.controls['lastName'].value,
    }
     this.service1.UpdateEmployee(obj);
    
  }
  
  
  

  

}
