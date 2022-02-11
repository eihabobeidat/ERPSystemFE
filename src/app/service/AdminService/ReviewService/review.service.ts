import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { IEmployee } from '../../AuthenticationService/IEmployee';
import { HrReviewService } from '../../HrService/ReviewService/hr-review.service';
import { IReview } from './IReview';
import { IReviewBasic } from './IReviewBasic';

interface IReviewB {
  id?:number
  employeeid?:number
  reviewedby?:number
  value?:number
  objective?:number
  competency?:number
  time?:Date
}

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  reviews:IReview[];

  constructor(private http:HttpClient, private spinner:NgxSpinnerService,private toaster:ToastrService,private hrservice:HrReviewService) { }

  getAdminReviews(){
    this.http.get<IReview[]>('https://localhost:44333/api/Review/getAllReview').subscribe(res => {
      this.reviews = res.filter(x => ((x.reviewedBy === 'HR' && (x.competency + x.objective + x.value) >= 3)) || x.reviewedBy === 'Admin');
    }, err => {
      this.toaster.error('Can\'t connect to ERP server','Connectivity Issue');
    })
  }

  submitReview(form:any){
    this.http.get<IReviewBasic>('https://localhost:44333/api/Review/getreviewbyid/'+form.id).subscribe((res:IReviewBasic) =>{
      if((res.value+res.competency+res.objective) < 3)
      {
        res.value = form.value;
        res.competency = form.competency;
        res.objective = form.objective;
      } else
      {
        res.value = Math.ceil((form.value + res.value)/2);
        res.competency = Math.ceil((form.competency + res.competency)/2);
        res.objective = Math.ceil((form.objective + res.objective)/2);
      }
      res.time = form.time;
      res.reviewedby = form.reviewedby;
      console.log(res);
      this.http.put('https://localhost:44333/api/Review/updatereview',res).subscribe(res => {
        this.toaster.success('Thank you for completing review','Submition Successful');
        if(localStorage.getItem('role') === 'Admin')
        {this.getAdminReviews();}
        else if(localStorage.getItem('role') === 'HR')
        {this.hrservice.getHrReviews();}
      }, err => {this.toaster.error('Try again later','Submition Failed');})
    }, err => {
      this.toaster.error('Can\'t connect to ERP server','Connectivity Issue');
    })
  }

  startNewEvaluation(){
    let existReviews = 0;
    let deletedReviews = 0;
    let hasError = false;
    this.http.get<IReview[]>('https://localhost:44333/api/Review/getAllReview').subscribe(res => {
      existReviews = res.length;
      res.forEach(element => {
        this.http.delete('https://localhost:44333/api/Review/deletereview/' + element.id).subscribe(res =>{
          deletedReviews++;
        })
      });
    }, err => {
      hasError = true;
      this.toaster.error('Can\'t connect to ERP server','Connectivity Issue');
    }, () => {
      if(existReviews === deletedReviews && !hasError){
        let employees = 0;
        let newReviews = 0;
        this.http.get<IEmployee[]>('https://localhost:44333/api/Employee/employeelist')
        .subscribe((res:IEmployee[]) => {
          employees = res.length;
          res.forEach(employee => {
            let review:IReviewB ={
              competency:0,
              value:0,
              objective:0,
              employeeid: employee.id,
              reviewedby: employee.id,
              time: new Date()
            }
            this.http.post('https://localhost:44333/api/Review/insertnewreview',review)
            .subscribe(res => {
              newReviews++;
              console.log(newReviews);
            }, err => {console.log('one review couldn\'t be inserted,', err)})
          });
        }, err => {console.log('Could not get employees', err)}, () => {
          setTimeout(()=>{
            if(employees === newReviews && employees > 0){
              this.toaster.success('Submitted successfully','Evaluation started');
              this.getAdminReviews();
            } else {
              this.toaster.warning('Some employees might not recieve the request, please try again','Evaluation Issue');
            }
          }, employees*100);
        })
        
      } else {
        this.toaster.error('Evaluation did not start correctly, please try again','something went wrong');
      }
    })
  }
}
