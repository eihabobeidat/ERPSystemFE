import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IContactus } from './IContactus';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient, private toaster:ToastrService) { }

  sendEmail(form:any){
    let temp = {
      to: form.email,
      senderName: "ERPS Team",
      recieverName: form.name,
      subject: "ERP System Support",
      body: "Thank you for your feedback, <br><br>our team will reach within two business days if there are any problems.<br><br>Please confirm your message:<br>" + form.message
    }
    const header = {
      "Content-Type":'application/json',
      "Accept":'Application/json'
    }
    const requestOption = {
      headers:new HttpHeaders(header),
    }
    this.http.post('https://localhost:44333/api/Vacation/Email',temp,requestOption).subscribe(result => {
      
    }, error =>{
      console.log(error);
    })
  }

  submitMessage(form:any)
  {
    let temp = {
      email: form.email,
      description: `From ${form.name}: ${form.message}`,
      time: new Date()
    }
    const header = {
      "Content-Type":'application/json',
      "Accept":'Application/json'
    }
    const requestOption = {
      headers:new HttpHeaders(header),
    }
    this.http.post('https://localhost:44333/api/ContactUs',temp,requestOption).subscribe(result => {
      this.toaster.success(form.name,'Thank you');
      this.sendEmail(form);
    }, error =>{
      this.toaster.error('Try again','Failed to submit');
    })
  }
}