import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IVacation } from './IVacation';
import { IVacationBalance } from './IVacationBalance';

@Injectable({
  providedIn: 'root'
})

export class LeaveService {
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
    //6 => is Admin, 5 => is Hr
   this.http.get<IVacation[]>('https://localhost:44333/api/Vacation').subscribe((res:IVacation[]) => {
     this.vacations = res.filter(x => x.reviewedby === 5 || x.reviewedby === 6);
   },err => {
     this.toaster.error('Failed to connect to server','Connectivity Issue');
     console.log(err);
   })
  }

  vacationApprove(form:any){
    this.http.put('https://localhost:44333/api/Vacation',form).subscribe(res => {
      this.toaster.success('Leave Status Updated','Success');
      if(form.status === 1){
        this.updateBalance(form);
        this.http.get('https://localhost:44333/api/Vacation/ApproveWaterMark/' + form.filepath).subscribe();
      } else {
        this.http.get('https://localhost:44333/api/Vacation/RejectWaterMark/' + form.filepath).subscribe();
      }
    }, err => {
      this.toaster.error('Something went wrong','Update Error');
      this.getAllVacation();
    })
  }

  updateBalance(form:IVacation){
    let balanceExist = false;
    this.http.get<IVacationBalance[]>('https://localhost:44333/api/VacationCount')
    .subscribe((res:IVacationBalance[])=> {
      res.forEach(element => {
        if(element.employeeid === form.employeeid && element.type === form.type)
        {
          balanceExist = true;
          console.log(element,form);
          console.log(element.employeeid,form.employeeid,element.type,form.type);
          let vacationDuration = this.getDifferenceInDays(form.starttime, form.endtime);
          element.count+=vacationDuration;
          this.http.put('https://localhost:44333/api/VacationCount', element)
          .subscribe(res => {
          }, err => {
            console.log(`the vacation balance can't be updated => ${err}`);
          });
        }
      });
    },err => {console.log(`could not get the vacationCount List ${err}`)}, ()=>{
      if(!balanceExist){
        let newBalance:IVacationBalance = {
          count: this.getDifferenceInDays(form.starttime, form.endtime),
          limit: 30,
          employeeid: form.employeeid,
          type: form.type
        }
        this.http.post('https://localhost:44333/api/VacationCount', newBalance)
        .subscribe(res => {}, err => {console.log(`Did not add new VacationCount ${err}`);})
      }
    })
  }
}
