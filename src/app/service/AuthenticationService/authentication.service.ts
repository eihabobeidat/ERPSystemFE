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

  postUser(form:any, checker:string=''){
    const requestOption = {
      headers:new HttpHeaders({
        "Content-Type":'application/json',
        "Accept":'Application/json'
      }),
    }
    this.http.post('https://localhost:44333/api/Employee',form, requestOption)
    .subscribe(res =>{
      if(checker !== 'google'){
        this.toaster.success(`Thanks Mx ${form.lastName}, try to login`,'Registered Successfuly');
      }
      else {
        this.validateUser(form);
      }
      
    },err =>{
      this.toaster.error('Please try again later','Registeration failed');
    })
  }

  async checkUser(form:any)
  {
    let isValid:boolean;
    const requestOption = {
      headers:new HttpHeaders({
        "Content-Type":'application/json',
        "Accept":'Application/json'
      }),
    }

    this.http.post('https://localhost:44333/api/Jwt/CheckEmail', form ,requestOption)
    .subscribe(res => {
      let temp = res.toString();
      if(temp.indexOf('is alredy exist') !== -1) {
        this.validateUser(form);
      } else {
        this.postUser(form , "google");
      }
    }, error => {
      this.toaster.error('could not reach server','Network connectivity problem');
    })
  }

  validateUser(form:any){
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
        this.router.navigate(['app/admin']);
      }
      else if(token.role === 'HR'){
        this.router.navigate(['app/hr']);
      }
      else if(token.role === 'Employee'){
        this.router.navigate(['app/employee']);
        console.log(token);
      }
    },err =>{
      this.toaster.error('Incorrect email or password', 'Login failed');
    })
  }
}
