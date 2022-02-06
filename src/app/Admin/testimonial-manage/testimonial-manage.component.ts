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


declare const exportTableToCSV: any;
declare const exportTableToExcel: any;
declare const printTable: any;

@Component({
  selector: 'app-testimonial-manage',
  templateUrl: './testimonial-manage.component.html',
  styleUrls: ['./testimonial-manage.component.css']
})
export class TestimonialManageComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'message','time','status'];
  // dataSource: MatTableDataSource<ITestimonialList>

  constructor(public admin:AdminService,)
  {
    this.admin.GetTestimonial()
    
    
  }

  
  ngOnInit(): void {
  }

  

  StatusCheck(status:any,Id:number)
  {

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

    
  }//end statuscheck



  exportToCSV(fileName: string) {
    exportTableToCSV(fileName);
  }

  exportToExcel() {
    exportTableToExcel();
  }

  printBtn() {
    printTable();
  }
 

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
 


}
