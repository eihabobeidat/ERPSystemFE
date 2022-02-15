import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/User/user.service';

@Component({
  selector: 'app-take-leave',
  templateUrl: './take-leave.component.html',
  styleUrls: ['./take-leave.component.css']
})
export class TakeLeaveComponent implements OnInit {
    LeaveForm=new FormGroup({
    startTime:new FormControl('',Validators.required),
    endTime:new FormControl('',Validators.required),
    Type:new FormControl('',Validators.required),
    Comment:new FormControl('',Validators.required),
  });

  constructor(public service:UserService) { }

  ngOnInit(): void {
  }

  Valdiation(){

    if(this.LeaveForm.status === "VALID")
    {
      return true;
    }
    else
    {
      return false;
    }
  }


  TakeLeave(form:any)
  {
   console.log(form);
    const x:any=localStorage.getItem('id');
    let uploadfile=<File> form[0]
    let formdata=new FormData()
    formdata.append('Filepath',uploadfile,uploadfile.name)
    formdata.append("Employeeid",x.toString());

    formdata.append('Starttime',this.LeaveForm.controls['startTime'].value)
    formdata.append('Endtime',this.LeaveForm.controls['endTime'].value) 
    formdata.append('Type',this.LeaveForm.controls['Type'].value);  
    formdata.append("comments",this.LeaveForm.controls['Comment'].value)

     this.service.TakeLeave(formdata);
     this.LeaveForm.reset();

  }

}
