import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HrReviewService } from '../../HrService/ReviewService/hr-review.service';
import { IReview } from './IReview';
import { IReviewBasic } from './IReviewBasic';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  reviews:IReview[];

  constructor(private http:HttpClient,private toaster:ToastrService,private hrservice:HrReviewService) { }

  getAdminReviews(){
    this.http.get<IReview[]>('https://localhost:44333/api/Review/getAllReview').subscribe(res => {
      this.reviews = res.filter(x => x.reviewedBy === 'HR' || x.reviewedBy === 'Admin');
    }, err => {
      this.toaster.error('Can\'t connect to ERP server','Connectivity Issue');
    })
  }

  submitReview(form:any){
    this.http.get<IReviewBasic>('https://localhost:44333/api/Review/getreviewbyid/'+form.id).subscribe((res:IReviewBasic) =>{
      res.competency = Math.ceil((form.competency + res.competency)/2);
      res.objective = Math.ceil((form.objective + res.objective)/2);
      res.value = Math.ceil((form.value + res.value)/2);
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
}
