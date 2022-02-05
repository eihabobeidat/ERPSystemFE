import { Component, OnInit } from '@angular/core';

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
  constructor() { }
  
  getRate(rate:number, stars:any){
    if (stars === 'value') {this.isValueSubmit = true; this.value=rate;}
    if(stars === 'objective') {this.isObjectiveSubmit = true; this.objective=rate;}
    if(stars === 'competency') {this.isCompetencySubmit = true; this.competency = rate;}

    //I need the employee id >>from table is better and make this as sub-component
    //you need to fix the reviewed by here to be connected to the role table >> I want to see hr
    if(this.isValueSubmit && this.isObjectiveSubmit && this.isCompetencySubmit){
      let form = {
        employeeid:45, //get this by mat dialog => emplyee id mat dialog
        reviewedby:localStorage.getItem('id'), //this need to be sent as number
        value:this.value,
        objective:this.objective,
        competency:this.competency,
        time:new Date()
      }
      console.log(form);
      //send this form to the service
    }
  }
  ngOnInit(): void {
  }

}
