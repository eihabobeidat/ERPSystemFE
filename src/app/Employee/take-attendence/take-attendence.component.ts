import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/User/user.service';

@Component({
  selector: 'app-take-attendence',
  templateUrl: './take-attendence.component.html',
  styleUrls: ['./take-attendence.component.css']
})
export class TakeAttendenceComponent implements OnInit {
  id:number;
  MonthNow:Date=new Date();
  constructor(public service:UserService) { 

  }

  ngOnInit(): void {
  }
  TakeCheckIn()
  {
    this.service.TakeCheckIn();
  }
  TakeCheckOut()
  {
    this.service.TakeCheckOut();
  }

}
