import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChatBoxComponent } from 'src/app/Shared/chat-box/chat-box.component';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {
  hideList:boolean=true;
  oldItem:any
  constructor(private router:Router, private dialog:MatDialog) { }

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
