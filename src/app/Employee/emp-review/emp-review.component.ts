import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeesReviewComponent } from 'src/app/Admin/employees-review/employees-review.component';
import { IReview } from 'src/app/service/AdminService/ReviewService/IReview';
import { IReviewBasic } from 'src/app/service/AdminService/ReviewService/IReviewBasic';

@Component({
  selector: 'app-emp-review',
  templateUrl: './emp-review.component.html',
  styleUrls: ['./emp-review.component.css']
})
export class EmpReviewComponent implements OnInit {
  reviewExist:boolean=false;
  reviewself:IReviewBasic;
  


  constructor(private http:HttpClient,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.GetReview();
  }
  GetReview(){
    this.http.get<IReview[]>('https://localhost:44333/api/Review/getallreview').
    subscribe((result:IReview[])=>{
      result.forEach(element => {
        if(element.reviewedBy===localStorage.getItem('role') && element.competency ===0 && element.value ===0 && element.objective ===0)
        {
          this.http.get<IReviewBasic>('https://localhost:44333/api/Review/getreviewbyid/'+element.id).subscribe((result)=>{
          if(result.employeeid.toString()===localStorage.getItem('id'))
          {
            this.reviewExist=true;
            this.reviewself=result;

          }
          });

        }
      });


    });
  }
  TakeReview(){
      this.reviewExist=false;
      this.dialog.open(EmployeesReviewComponent, {data:{id:this.reviewself.id}});
   
  }

}
