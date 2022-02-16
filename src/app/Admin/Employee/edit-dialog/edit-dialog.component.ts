import { AfterViewChecked, AfterViewInit, Component, Inject, OnInit } from '@angular/core';
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
    mobile: new FormControl(this.service1.oneEmployee.mobile,[Validators.required]),
    firstname: new FormControl(this.service1.oneEmployee.firstname,[Validators.required]),
    lastname: new FormControl(this.service1.oneEmployee.lastname,[Validators.required]),
    address: new FormControl(this.service1.oneEmployee.address,[Validators.required]),
    password: new FormControl(this.service1.oneEmployee.password,[Validators.required])
     
    });
  
  userId:number;
  constructor(public service1:EmployeeService ,
    public matdialog: MatDialog ,@Inject(MAT_DIALOG_DATA)public data:{id:number}) {
    
   
        this.userId=data.id;

    





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
      id:this.userId,
      email:this.EditEmployee.controls['email'].value,
      mobile:this.EditEmployee.controls['mobile'].value,
      password:this.EditEmployee.controls['password'].value,
      address:this.EditEmployee.controls['address'].value,
      firstname:this.EditEmployee.controls['firstname'].value,
      lastname:this.EditEmployee.controls['lastname'].value,
      roleid:4,
      salary:this.service1.oneEmployee.salary,
      imagepath:this.service1.oneEmployee.imagepath
    }
    this.service1.UpdateEmployee(obj);
    this.matdialog.closeAll();
    
  }
  
  
  

  

}
