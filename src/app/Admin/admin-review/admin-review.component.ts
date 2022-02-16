import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReviewService } from 'src/app/service/AdminService/ReviewService/review.service';
import { EmployeesReviewComponent } from '../employees-review/employees-review.component';

declare const exportTableToCSV: any;
declare const exportTableToExcel: any;
declare const printTable: any;

@Component({
  selector: 'app-admin-review',
  templateUrl: './admin-review.component.html',
  styleUrls: ['./admin-review.component.css']
})

export class AdminReviewComponent implements OnInit {
  displayedColumns: string[] = ['imagePath','firstName', 'lastName', 'value',
  'objective', 'competency', 'time', 'status'];

  constructor(public service:ReviewService, private dialog:MatDialog) { }

  reviewEmployee(reviewId:number){
    this.dialog.open(EmployeesReviewComponent, {data:{id:reviewId}});
  }

  ngOnInit(): void {
    this.service.getAdminReviews();
  }

  exportToCSV(fileName: string) {
    exportTableToCSV(fileName);
  }

  exportToExcel() {
    exportTableToExcel();
  }

  printBtn() {
    printTable();
  }
 
}
