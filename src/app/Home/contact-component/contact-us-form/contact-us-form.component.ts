import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.css'],
})
export class ContactUsFormComponent implements OnInit {
  contactForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required, Validators.email]),
    message:new FormControl('',[Validators.required,Validators.minLength(12)])
  })
  constructor(
    //public contactService: ContactService
    ) {}

    formValidationCheck(){
      return this.contactForm.controls['name'].valid && this.contactForm.controls['email'].valid && this.contactForm.controls['message'].valid;
    }
  ngOnInit(): void {}

  onSubmit() {
    console.log("submited!!");
    //this.contactService.createContact();
  }
}
