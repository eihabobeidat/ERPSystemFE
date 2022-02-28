import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/User/user.service';

@Component({
  selector: 'app-my-leave',
  templateUrl: './my-leave.component.html',
  styleUrls: ['./myleave.scss']
})
export class MyLeaveComponent implements OnInit {

  constructor(public service:UserService) { 
    this.service.GetMyLeave();

  }

  ngOnInit(): void {
  }

  
}
