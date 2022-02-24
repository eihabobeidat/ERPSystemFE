import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/service/Admin/Employee/employee.service';
import { AuthenticationService } from 'src/app/service/AuthenticationService/authentication.service';


@Component({
  selector: 'app-hr-register-employee',
  templateUrl: './hr-register-employee.component.html',
  styleUrls: ['./hr-register-employee.component.css']
})
export class HrRegisterEmployeeComponent implements OnInit {
  hide:boolean=false;
  registerForm = new FormGroup({
    roleId: new FormControl(4),
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)]),
    address: new FormControl('',[Validators.required]),
    mobile: new FormControl('',[Validators.required]),
    imagePath: new FormControl(''), //hr register default image
    salary: new FormControl(400),
  });

  formValidation() {
    if(this.registerForm.status === "VALID"){
      return true;
    }
    return false;
  }

  constructor(private service:AuthenticationService, private empservice:EmployeeService) 
  { 

  }

  register()
  {
    console.log(this.registerForm.value)
    if(this.formValidation()){
      this.service.postUser(this.registerForm.value);
    }
  }

  ngOnInit(): void
  {

  }

  upload(file:any)
  {
    console.log(file);
    let uploadfile=<File> file[0]
    let formdata=new FormData()
    formdata.append('file',uploadfile,uploadfile.name)
    this.empservice.ImportExcel(formdata);
  }
  
}
