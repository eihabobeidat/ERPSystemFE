import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/AdminService/admin.service';
import { IPermissionBasic, PermissionService } from 'src/app/service/AdminService/PermissionService/permission.service';

export interface IPermissionList{
  employeeId:number
  firstName:string 
  lastName:string
  imagepath:string
  time:Date
  salaryFlag:number
  employFlag:number
  
}

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {
  displayedColumns: string[] = ['imagepath','employeeId', 'firstName', 'lastName','time','salaryFlag','employFlag'];

  constructor(public perm:PermissionService) { }

  ngOnInit(): void {
    this.perm.getAllPermissions()
  }

  StatusCheck(status:any,permession:any,flag:number)
   {

    if(status.checked == true)
    {

      let object:IPermissionBasic={
        time:new Date,
        salaryFlag:1,
        employFlag:permession.employFlag,
        employeeId:permession.employeeId
      }
      this.perm.updatePermission(object)
    }

    else
    {
      let object:IPermissionBasic={
        time:new Date,
        salaryFlag:0,
        employFlag:permession.employFlag,
        employeeId:permession.employeeId
      }
      this.perm.updatePermission(object)
  }

    
  }//end statuscheck


  StatusCheck1(status:any,permession:any,flag:number)
  {

    if(status.checked == true)
    {

      let object:IPermissionBasic={
        time:new Date,
        salaryFlag:permession.salaryFlag,
        employFlag:1,
        employeeId:permession.employeeId
      }
      this.perm.updatePermission(object)
    }

    else
    {
      let object:IPermissionBasic={
        time:new Date,
        salaryFlag:permession.salaryFlag,
        employFlag:0,
        employeeId:permession.employeeId
      }
      this.perm.updatePermission(object)
  }

  }

}
