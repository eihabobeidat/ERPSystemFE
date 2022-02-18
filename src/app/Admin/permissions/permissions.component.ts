import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/AdminService/admin.service';

export interface IPermissionList{
  employeeid:number
  firstname:string 
  lastname:string
  imagepath:string
  time:Date
  salaryflag:number
  employeeflag:number
  
}

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {
  displayedColumns: string[] = ['employeeid', 'firstname', 'lastname','imagepath','time','salaryflag','employeeflag'];

  constructor(public admin:AdminService) { }

  ngOnInit(): void {
  }

  StatusCheck(status:any,Id:number)
  {

    if(status.checked == true)
    {
      let object={
        id:Id,
        status:1
      }
      this.admin.UpdateTestimonialStatus(object)
    }

    else
    {
      let object={
        id:Id,
        status:0
      }
      this.admin.UpdateTestimonialStatus(object)
    }

    
  }//end statuscheck

}
