import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { EmployeeService } from 'src/app/service/EmployeeService/employee.service';
import { ChatBoxComponent } from 'src/app/Shared/chat-box/chat-box.component';

@Component({
  selector: 'app-hr-nav',
  templateUrl: './hr-nav.component.html',
  styleUrls: ['./hr-nav.component.css']
})
export class HrNavComponent implements OnInit {

  hideList:boolean=true;
  oldItem:any
  imagename:any = this.service.userimage;
  constructor(private router:Router,public service:EmployeeService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.service.ReloadImage()
    console.log(this.service.empname);
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
