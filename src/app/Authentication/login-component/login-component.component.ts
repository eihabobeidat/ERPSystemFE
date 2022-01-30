import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { AuthenticationService } from 'src/app/service/AuthenticationService/authentication.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  hide:boolean = true;
  dataRetreived:boolean = false;
  user?: SocialUser;
  
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)])
  });

  constructor(private authService:SocialAuthService, private service:AuthenticationService)
  { 

  }

  googleLogin(){
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.dataRetreived = (user != null);
      console.log(this.user);
    });
  }

  login() 
  {
    this.service.checkUser(this.loginForm.value);
  }

  formValidation(){
    if(this.loginForm.status === "VALID"){
      return true;
    }
    return false;
  }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.dataRetreived = (user != null);
      console.log(this.user);
    });
  }

}
