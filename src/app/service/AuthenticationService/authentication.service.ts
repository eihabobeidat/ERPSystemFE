import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import jwt_Decode from 'jwt-decode';
import { Router } from '@angular/router';
import { IToken } from './IToken';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private toaster:ToastrService, private http:HttpClient,private router:Router) { }

  postUser(form:any){
    const requestOption = {
      headers:new HttpHeaders({
        "Content-Type":'application/json',
        "Accept":'Application/json'
      }),
    }
    this.http.post('https://localhost:44333/api/Employee',form, requestOption)
    .subscribe(res =>{
      this.toaster.success(`Thanks Mx ${form.lastName}, try to login`,'Registered Successfuly');
    },err =>{
      this.toaster.error('Please try again later','Registeration failed');
    })
  }

  checkUser(form:any){
    const requestOption = {
      headers:new HttpHeaders({
        "Content-Type":'application/json',
        "Accept":'Application/json'
      }),
    }
    this.http.post('https://localhost:44333/api/Jwt',form, requestOption)
    .subscribe(res =>{
      let token:IToken = jwt_Decode(res.toString());
      localStorage.setItem('id', token.id);
      localStorage.setItem('role', token.role);
      localStorage.setItem('email', token.email);
      
      if(token.role === 'Admin'){
        //this.router.navigate(['admin']);
      }
      else if(token.role === 'HR'){
        //this.router.navigate(['hr']);
      }
      else if(token.role === 'Employee'){
        //this.router.navigate(['employee']);
        console.log(token);
      }
    },err =>{
      this.toaster.error('Incorrect email or password', 'Login failed');
    })
  }
}
