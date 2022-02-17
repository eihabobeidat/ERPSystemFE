import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/service/AuthenticationService/authentication.service';

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.css']
})
export class RegistrationComponentComponent implements OnInit {
  hide:boolean=false;
  registerForm = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    
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
    
  }

  forgotPassword(){
    this.service.sendPassword(this.registerForm.value);
  }

  ngOnInit(): void
  {

  }

}
