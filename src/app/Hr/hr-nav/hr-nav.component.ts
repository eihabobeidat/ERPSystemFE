import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-hr-nav',
  templateUrl: './hr-nav.component.html',
  styleUrls: ['./hr-nav.component.css']
})
export class HrNavComponent implements OnInit {

  hideList:boolean=true;
  oldItem:any
  imagename:string = localStorage.getItem('imagename') as string;
  constructor(private router:Router) { }

  ngOnInit(): void {
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
