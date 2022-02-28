import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { EmployeeService } from 'src/app/service/EmployeeService/employee.service';
import { ChatBoxComponent } from 'src/app/Shared/chat-box/chat-box.component';

interface IChatMessage {
  firstName: string
  text: string
  imagePath:string
  sender:number
}

@Component({
  selector: 'app-hr-nav',
  templateUrl: './hr-nav.component.html',
  styleUrls: ['./hr-nav.component.css']
})
export class HrNavComponent implements OnInit {

  hideList:boolean=true;
  oldItem:any
  imagename:any = this.service.userimage;
  notifications:IChatMessage[]=[]
  messageLength:boolean=false
  constructor(private router:Router,public service:EmployeeService, private dialog:MatDialog,
    private http:HttpClient) 
  { 
    this.service.ReloadImage()
  }

  ngOnInit(): void {
    this.NotificationMessage()
    
  }

  openMessages(){
    this.dialog.open(ChatBoxComponent, {data:{}});
    this.messageLength=false;
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

  NotificationMessage()
  {
    this.http.get<IChatMessage[]>('https://localhost:44333/api/Message/GetAll').subscribe((res:IChatMessage[])=>{
     let rev=res.reverse();
     
     for(let i=0;i<4;i++)
     {
       this.notifications.push( rev[i])
     }
     this.HasMessage()
    })
    
  }

  HasMessage()
  {
    if(this.notifications[this.notifications.length-1].sender.toString() === localStorage.getItem('id') as string)
    {
      this.messageLength=false
    }
    else
    {
    this.messageLength=true;
    }
  }
}
