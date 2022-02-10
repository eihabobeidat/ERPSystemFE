import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-nav',
  templateUrl: './employee-nav.component.html',
  styleUrls: ['./employee-nav.component.css']
})
export class EmployeeNavComponent implements OnInit {
  hideList:boolean=true;
  oldItem:any
  constructor() { }

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
  
  showList()
  {
    this.hideList=!this.hideList
  }

}
