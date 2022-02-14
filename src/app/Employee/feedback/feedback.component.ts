import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/service/EmployeeService/employee.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

 
    message= new FormControl('',[Validators.required, Validators.minLength(12)])
 

  constructor(public srevice:EmployeeService) { }

  ngOnInit(): void {
  }

  formValidationCheck(){
    return this.message.valid
  }

  sendtestimonial()
  {
    const now = new Date()
    let object={
      employeeid:parseInt(localStorage.getItem('id') as string),
      message:this.message.value,
      time:now.toISOString() ,
      status:0
    }
    this.srevice.InsertTestimonial(object)
    this.message.reset()
  }


}
