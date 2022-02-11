import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/AdminService/admin.service';


export interface IEmployee{
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
@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {
  hideList:boolean=true;
  oldItem:any
  imagename:any = this.service.ReloadImage()
  
  constructor(private router:Router, private http:HttpClient,private service:AdminService) 
  { 

  }

  ngOnInit(): void {

    // this.http.get<any>('https://localhost:44333/api/Employee/GetById/'+this.employeeId).subscribe((result:IEmployee)=>{
    //   this.imagename=result.imagepath
    //  })
  }
  

  active(item:any)
  {
    
    item.classList.add('active')
    
    if(this.oldItem)
    {
      console.log(this.oldItem);
      this.oldItem.classList.remove('active')
      
    }
    this.oldItem=item
    

  }

  logoutUser(){
    localStorage.clear();
    this.router.navigate(['']);
  }

  showList()
  {
    this.hideList=!this.hideList
  }
}
