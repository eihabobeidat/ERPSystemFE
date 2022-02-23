import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  attendancelist:any[]=[]
  constructor(private http: HttpClient,private toaster:ToastrService ) { }


  GetEmployeeAttendance(employeeId:any)
{
  this.http.get<any[]>('https://localhost:44333/api/Attendance/GetattendanceByEmployeeId/'+employeeId)
  .subscribe((result:any)=>{
    this.attendancelist=result
  
   
   })
}

}
