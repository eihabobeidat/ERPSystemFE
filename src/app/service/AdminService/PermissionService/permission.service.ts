import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export interface IPermission{
  employeeId?:number
  imagepath?:string
  firstName?:string
  lastName?:string
  time?:Date
  salaryFlag?:number
  employFlag?:number
}

export interface IPermissionBasic{
  employeeId?:number
  time?:Date
  salaryFlag?:number
  employFlag?:number
  
}

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  data:any=[]
  permission:IPermission={
    salaryFlag:0,
    employFlag:0
  };


  constructor(private http:HttpClient, private toaster:ToastrService) { }

  getAllPermissions(){
    this.http.get<IPermission[]>('https://localhost:44333/api/Permission')
    .subscribe((res:IPermission[]) => {
      this.data=res
    })
  }

  getPermission(id:number|string){
    this.http.get<IPermission>('https://localhost:44333/api/Permission/GetById/' + id)
    .subscribe((res:IPermission) => {
      this.permission=res
      console.log(res);
      
    })
  }

  updatePermission(form:IPermissionBasic){
    this.http.put('https://localhost:44333/api/Permission', form)
    .subscribe(res => {
      this.getAllPermissions();
      this.toaster.success('Permission granted','Submition Successful');
    }, err => {
      this.toaster.error('Try again later','Submition Failed');
    })
  }

  insertPermission(email:string)
  {
    let temp = {
      salaryFlag:0,
      employFlag:0,
      time:new Date(),
      email:email
    }
    this.http.post('https://localhost:44333/api/Permission', temp)
    .subscribe(res => {
      //permission inserted
    }, err => {
      this.toaster.error('Try again later','Submition Failed');
    })
  }
}
