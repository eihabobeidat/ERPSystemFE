import { Component, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor, FormControl, FormGroup, Validators } from '@angular/forms';
import { GoogleLoginProvider, SocialAuthService } from "angularx-social-login";
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
  userTemp:any;
  
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)])
  });

  constructor(private authService:SocialAuthService, private service:AuthenticationService)
  { 

  }

  googleLogin(){
    if(!this.dataRetreived){
      this.authService.initState.subscribe(res => {
        let temp:any = this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((response:SocialUser) => {
          this.user = response;
          this.dataRetreived = (response != null);
          this.userTemp = {
            roleId: 4,
            firstName: response.firstName,
            lastName: response.lastName,
            email: response.email,
            password: 'Google temporary password',
            address: response.provider,
            mobile: '',
            imagePath: response.photoUrl
          }
        }, err => {console.log(err);});
      });
    } else {
      this.service.checkUser(this.userTemp);
    }
    
  }

  login() 
  {
    this.service.validateUser(this.loginForm.value);
  }

  formValidation(){
    if(this.loginForm.status === "VALID")
    {
      return true;
    }
    return false;
  }

  ngOnInit(): void {
  }

}
