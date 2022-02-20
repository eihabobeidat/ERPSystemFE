import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/AdminService/admin.service';
import { ChatBoxComponent } from 'src/app/Shared/chat-box/chat-box.component';



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

  imagename:any = this.service.userimage;
  
  constructor(private router:Router, private http:HttpClient,public service:AdminService,private dialog:MatDialog) 
  {  
    this.service.ReloadImage()
  }
  

  ngOnInit(): void {

    
  
  }
  

  openMessages(){
    this.dialog.open(ChatBoxComponent, {data:{}});
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
