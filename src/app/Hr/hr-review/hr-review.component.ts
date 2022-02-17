import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeesReviewComponent } from 'src/app/Admin/employees-review/employees-review.component';
import { HrReviewService } from 'src/app/service/HrService/ReviewService/hr-review.service';

declare const exportTableToCSV: any;
declare const exportTableToExcel: any;
declare const printTable: any;

@Component({
  selector: 'app-hr-review',
  templateUrl: './hr-review.component.html',
  styleUrls: ['./hr-review.component.css']
})
export class HrReviewComponent implements OnInit {

  displayedColumns: string[] = ['imagePath','firstName', 'lastName', 'value',
  'objective', 'competency', 'time', 'status'];

  constructor(public service:HrReviewService, private dialog:MatDialog) { }

  reviewEmployee(reviewId:number){
    this.dialog.open(EmployeesReviewComponent, {data:{id:reviewId}});
  }

  ngOnInit(): void {
    this.service.getHrReviews();
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
