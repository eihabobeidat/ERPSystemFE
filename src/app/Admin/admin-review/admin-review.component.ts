import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReviewService } from 'src/app/service/AdminService/ReviewService/review.service';
import { EmployeesReviewComponent } from '../employees-review/employees-review.component';

@Component({
  selector: 'app-admin-review',
  templateUrl: './admin-review.component.html',
  styleUrls: ['./admin-review.component.css']
})
export class AdminReviewComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'value',
  'objective', 'competency', 'time', 'imagePath', 'status'];

  constructor(public service:ReviewService, private dialog:MatDialog) { }

  reviewEmployee(reviewId:number){
    this.dialog.open(EmployeesReviewComponent, {data:{id:reviewId}});
  }

  ngOnInit(): void {
    this.service.getAdminReviews();
  }

}
