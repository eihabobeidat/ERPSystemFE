import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReviewService } from 'src/app/service/AdminService/ReviewService/review.service';

@Component({
  selector: 'app-employees-review',
  templateUrl: './employees-review.component.html',
  styleUrls: ['./employees-review.component.css']
})
export class EmployeesReviewComponent implements OnInit {
  isValueSubmit:boolean = false;
  isObjectiveSubmit:boolean = false;
  isCompetencySubmit:boolean = false;
  value?:number;
  objective?:number;
  competency?:number;
  constructor(private dialog:MatDialog, @Inject(MAT_DIALOG_DATA)public data:{id:number}, private service:ReviewService) { }
  
  getStaticId(){
    if(localStorage.getItem('role') === 'admin' || localStorage.getItem('role') === 'Admin')
    {
      return '82';
    }
    else if (localStorage.getItem('role') === 'HR' || localStorage.getItem('role') === 'Hr')
    {
      return '145';
    }
    else
    {
      return '150';
    }
  }

  getRate(rate:number, stars:any){
    if(stars === 'value') {this.isValueSubmit = true; this.value=rate;}
    if(stars === 'objective') {this.isObjectiveSubmit = true; this.objective=rate;}
    if(stars === 'competency') {this.isCompetencySubmit = true; this.competency = rate;}

    //Once all categories reviewed rated
    if(this.isValueSubmit && this.isObjectiveSubmit && this.isCompetencySubmit){
      this.dialog.closeAll();
      let temp = localStorage.getItem('id');
      let form = {
        id:this.data.id,
        reviewedby:parseInt(temp? temp: this.getStaticId()),
        value:this.value,
        objective:this.objective,
        competency:this.competency,
        time:new Date()
      }
      this.service.submitReview(form);
    }
  }
  ngOnInit(): void {
  }

}
