import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-email',
  templateUrl: './admin-email.component.html',
  styleUrls: ['./admin-email.component.css']
})
export class AdminEmailComponent implements OnInit {
  
  hide:boolean=false;
  emailForm = new FormGroup({
    recieverName: new FormControl('',[Validators.required]),
    subject: new FormControl('',[Validators.required]),
    body: new FormControl('',[Validators.required]),
  });

  formValidation() {
    if(this.emailForm.status === "VALID"){
      return true;
    }
    return false;
  }

  constructor(private http:HttpClient, private dialog:MatDialog, @Inject(MAT_DIALOG_DATA)public data:{email:string}) { }

  ngOnInit(): void {
  }

  sendReply(){
    let temp = {
      to: this.data.email,
      senderName: "ERPS Team",
      recieverName: this.emailForm.controls['recieverName'].value,
      subject: this.emailForm.controls['subject'].value,
      body: this.emailForm.controls['body'].value
    }
    console.log(temp);
    this.http.post('https://localhost:44333/api/Vacation/Email',temp).subscribe(result => {
      this.dialog.closeAll();
    }, error =>{
      
    })
  }
}
