import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    imagePath: new FormControl('person-three.jpg'),
    salary: new FormControl(400),
  });

  formValidation() {
    if(this.registerForm.status === "VALID"){
      return true;
    }
    return false;
  }

  constructor(private service:AuthenticationService) 
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
}
