import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IVacation } from './IVacation';

@Injectable({
  providedIn: 'root'
})

export class LeaveService {
  vacations?:any;
  constructor(private http:HttpClient, private toaster:ToastrService) { }

  getAllVacation(){
    //6 => is Admin, 5 => is Hr
   this.http.get<IVacation[]>('https://localhost:44333/api/Vacation').subscribe((res:IVacation[]) => {
     console.log(res);
     this.vacations = res.filter(x => x.reviewedby === 5 || x.reviewedby === 6);
     console.log(this.vacations);
   },err => {
     this.toaster.error('Failed to connect to server','Connectivity Issue');
     console.log(err);
   })
  }

  vacationApprove(form:any){
    this.http.put('https://localhost:44333/api/Vacation',form).subscribe(res => {
      this.toaster.success('Leave Status Updated','Success');
    }, err => {
      this.toaster.error('Something went wrong','Update Error');
      this.getAllVacation();
    })
  }
}
