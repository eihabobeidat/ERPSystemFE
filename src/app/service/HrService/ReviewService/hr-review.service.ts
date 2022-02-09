import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IReview } from '../../AdminService/ReviewService/IReview';
import { IReviewBasic } from '../../AdminService/ReviewService/IReviewBasic';

@Injectable({
  providedIn: 'root'
})
export class HrReviewService {

  reviews:IReview[];

  constructor(private http:HttpClient,private toaster:ToastrService) { }

  getHrReviews(){
    this.http.get<IReview[]>('https://localhost:44333/api/Review/getAllReview').subscribe(res => {
      this.reviews = res.filter(x => x.reviewedBy === 'HR' || x.reviewedBy === 'Employee');
    }, err => {
      this.toaster.error('Can\'t connect to ERP server','Connectivity Issue');
    })
  }
}