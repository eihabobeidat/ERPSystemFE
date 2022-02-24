import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
export interface IPermission{
  employeeId?:number
  imagepath?:string
  firstName?:string
  lastName?:string
  time?:Date
  salaryFlag?:number
  employFlag?:number
}
@Injectable({
  providedIn: 'root'
})
export class PermissionSGuard implements CanActivate {
  permission:IPermission;
  constructor(private http:HttpClient)
  {
    this.GetPermission();

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.permission.salaryFlag===1)
    return true;
    else
    return false;
  }
  GetPermission()
  {
    this.http.get<IPermission>('https://localhost:44333/api/Permission/GetById/' + parseInt(localStorage.getItem('id') as string ))
    .subscribe((res:IPermission) => {
      this.permission=res
      console.log(res);
      
    })

  }
  
}
