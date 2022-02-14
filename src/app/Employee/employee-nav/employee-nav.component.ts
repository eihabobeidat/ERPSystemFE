import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChatBoxComponent } from 'src/app/Shared/chat-box/chat-box.component';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/EmployeeService/employee.service';

@Component({
  selector: 'app-employee-nav',
  templateUrl: './employee-nav.component.html',
  styleUrls: ['./employee-nav.component.css']
})
export class EmployeeNavComponent implements OnInit {
  hideList:boolean=true;

  oldItem:any
  imagename:any = this.service.userimage;
  
  constructor(private router:Router,public service:EmployeeService,private dialog:MatDialog) { }
  
  openMessages(){
    this.dialog.open(ChatBoxComponent, {data:{}});
  }



  ngOnInit(): void {
    this.service.ReloadImage()
    
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
