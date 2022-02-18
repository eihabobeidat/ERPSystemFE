import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { timestamp } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  MyLeaves:any=[{}]
  qual:any[]=[];

 
  
  constructor(private http:HttpClient , private toaster1:ToastrService) {


   }
   TakeCheckIn()
   {
     let x:any=localStorage.getItem('id');
     
     let obj={
      Employeeid:parseInt(x)
     }
      this.http.post('https://localhost:44333/api/Attendance/insertnewattendance',obj).subscribe((result)=>{
      this.toaster1.success("have taken","Update")
    });
     
    
   }
   TakeLeave(form:FormData)
   {
    const header = {
      "Content-Type":'application/json',
      "Accept":'Application/json'
    }
    const requestOption = {
      headers:new HttpHeaders(header),
    }
  
     this.http.post("https://localhost:44333/api/Vacation/postnewleave",form).
     subscribe((result)=>{
       this.toaster1.success("Leave Applied","insert")
    } 
    , error=>{console.log(error);}
 
 );
 
 
   }
   GetMyLeave()
   {
     let x:any=(localStorage.getItem('id'))
     let obj={
       id:parseInt(x.toString())
     }
     this.http.post('https://localhost:44333/api/Vacation/ByEmployeeId', obj).subscribe((result)=>{
        this.MyLeaves=result

     });
   }
   TakeCheckOut(){
    let x:any=(localStorage.getItem('id'))
    let obj={
      id:parseInt(x.toString())
      }
    this.http.post('https://localhost:44333/api/Attendance/UpdateCheckOut', obj).subscribe((result)=>{
        
       

     });


   }
   NewQualfication(form:FormData)
   {
     this.http.post('https://localhost:44333/api/Qualification/insertnewqualfication',form).subscribe((result)=>{
       

     });

   }
   GetMyQual(){
     this.http.get<any[]>('https://localhost:44333/api/Qualification/qetallqualwithnamebyid/'+localStorage.getItem('id')).subscribe((result)=>
     {
       this.qual=result;

     });
   }

  
}
