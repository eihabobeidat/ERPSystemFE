import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import jwt_Decode from 'jwt-decode';
import { Router } from '@angular/router';
import { IToken } from './IToken';

interface IEmployee{
  email:string,
  password:string,
  firstname:string,
  roleid:number,
  lastname:string,
  mobile:string,
  address:string,
  imagepath:string,
  salary:number,
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private toaster:ToastrService, private http:HttpClient,private router:Router) { }

  sendPassword(form:any){
    let temp = {
      to: form.email,
      senderName: "ERPS Team",
      recieverName: form.firstName,
      subject: "ERP System Support",
      body: "Hope you are doing great, <br><br>Your new password is 12345678,<br> if it did not work send us your RI by replying to this email.<br><br>Have a nice day,<br>"
    }
    const header = {
      "Content-Type":'application/json',
      "Accept":'Application/json'
    }
    const requestOption = {
      headers:new HttpHeaders(header),
    }
    this.http.get<IEmployee[]>('https://localhost:44333/api/Employee/GetByName/' + form.firstName)
    .subscribe((res:IEmployee[]) => {
      res.filter(x => {x.email === form.email && x.firstname === form.firstName && x.lastname === form.lastName});
      let user = res[0];
      if(user){
        user.password = '12345678';
        this.http.put('https://localhost:44333/api/Employee/updateemployee', user)
        .subscribe(res => {
          this.http.post('https://localhost:44333/api/Vacation/Email',temp,requestOption).subscribe(result => {
            this.toaster.success('Check your email, and try to login now!','Password Reseted');
          }, error =>{
            this.toaster.error('Can\'t reach ERP server','Connectivity Issue');
          })
        })
      } else {
        this.toaster.warning('There is no matchs for your information','Incorrect input');
      }
    })
  }

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
      }
    },err =>{
      if(err.status === 401 ){
        this.toaster.error('Incorrect email or password', 'Authentication');
      }else{
        this.toaster.error('Can\'t Reach ERP Server', 'Connectivity Proplem');
      }
    })
  }
}
