import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Employee } from '../../Admin/Employee';
import { IVacation } from '../../AdminService/LeaveService/IVacation';
import { IVacationBalance } from '../../AdminService/LeaveService/IVacationBalance';

@Injectable({
  providedIn: 'root'
})
export class HrLeaveService {
  vacations?:any;
  constructor(private http:HttpClient, private toaster:ToastrService) { }

  getDifferenceInDays(date1:Date|string, date2:Date|string) {
    if(typeof date1 === 'string'){
      date1 = new Date(date1);
    }
    if(typeof date2 === 'string'){
      date2 = new Date(date2);
    }
    const diffInMs = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
  }

  getAllVacation(){
    //6 => is Admin, 5 => is Hr, 4 => is employee
   this.http.get<IVacation[]>('https://localhost:44333/api/Vacation').subscribe((res:IVacation[]) => {
     this.vacations = res.filter(x => x.reviewedby === 4 || x.reviewedby === 5);
   },err => {
     this.toaster.error('Failed to connect to server','Connectivity Issue');
     console.log(err);
   })
  }

  vacationApprove(form:IVacation){
    this.http.put('https://localhost:44333/api/Vacation',form).subscribe(res => {
      this.toaster.success('Leave Status Updated','Success');
      if(form.status === 0){
        this.sendEmail(form.employeeid,'Your leave request had been approved by HR, admins will respond to your request within two business days');
      } else {
        this.sendEmail(form.employeeid,'We are sorry, your leave request had been rejected by HR');
      }
    }, err => {
      this.toaster.error('Something went wrong','Update Error');
      this.getAllVacation();
    })
  }

  sendEmail(id:number|undefined, message:string){
    this.http.get<Employee>('https://localhost:44333/api/Employee/GetById/' + id).subscribe(res => {
      let temp = {
        to: res.email,
        senderName: "ERPS HR Team",
        recieverName: res.firstname,
        subject: "HR: Leave Status",
        body: "Hope you are doing well, <br><br>" + message +".<br><br>Have a nice day<br>"
      }
      this.http.post('https://localhost:44333/api/Vacation/Email',temp).subscribe(result => {
        
      }, error =>{
        //console.log(error);
      })
    })
  }
}
