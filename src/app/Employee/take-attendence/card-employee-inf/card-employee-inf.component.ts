import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-employee-inf',
  templateUrl: './card-employee-inf.component.html',
  styleUrls: ['./card-employee-inf.component.css']
})
export class CardEmployeeInfComponent implements OnInit {
  date = new Date();
 
  x:any=this.date.getFullYear() + "/" + this.date.getMonth() + "/" + this.date.getDay();
  constructor() { 
  }

  ngOnInit(): void {
  }

}
