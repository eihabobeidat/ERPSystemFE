import { Component, Input, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/AdminService/admin.service';

export interface ITestimonialList{
  id:number,
  firstName:string,
  lastName:string,
  message:string,
  time:Date,
  status:number
}

@Component({
  selector: 'app-testimonial-manage',
  templateUrl: './testimonial-manage.component.html',
  styleUrls: ['./testimonial-manage.component.css']
})
export class TestimonialManageComponent implements OnInit {

 
  constructor(public admin:AdminService,)
  {
    this.admin.GetTestimonial()
  }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['firstName', 'lastName', 'message','time','status'];

  StatusCheck(status:any,Id:number)
  {

    // console.log(status.checked);
    // console.log(list);
    
    
    if(status.checked == true)
    {
      let object={
        id:Id,
        status:1
      }
      this.admin.UpdateTestimonialStatus(object)
    }

    else
    {
      let object={
        id:Id,
        status:0
      }
      this.admin.UpdateTestimonialStatus(object)
    }

   
   
  }

 


}
