import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/service/EmployeeService/employee.service';

export interface IEmployee{
    email:string,
    password:string,
    firstname:string,
    roleid:number,
    lastname:string,
    mobile:string,
    address:string,
    imagepath:string,
    salary:number,
}


@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
  
  id=new FormControl(parseInt (localStorage.getItem('id') as string),[Validators.required])
  employeeEmail=new FormControl('',[Validators.required,Validators.email])
  password=new FormControl('',[Validators.required,Validators.minLength(8)])
  roleid=new FormControl('',[Validators.required])
  firstname=new FormControl('',[Validators.required])
  lastname=new FormControl('',[Validators.required])
  mobile=new FormControl('',[Validators.required])
  address=new FormControl('',[Validators.required])
  imagePath=new FormControl('',[Validators.required])
  salary=new FormControl('',[Validators.required])

  employeeId:number=parseInt(localStorage.getItem('id') as string)

  constructor(public service:EmployeeService, private http:HttpClient) {
    
    
    
   }

  ngOnInit(): void {
    
    this.GetEmployeebyId()
  }


  Update()
  {
    let object={
      id:this.employeeId,
      email:this.employeeEmail.value,
      password:this.password.value,
      roleid:this.roleid.value,
      firstname:this.firstname.value,
      lastname:this.lastname.value,
      mobile:this.mobile.value,
      address:this.address.value,
      imagepath:this.imagePath.value,
      salary:this.salary.value
    }
    
    this.service.UpdateEmployeeProfile(object)
  }


  Validation()
  {
    if(this.firstname.status == "VALID" && this.lastname.status == "VALID" && this.employeeEmail.status == "VALID"
    && this.password.status == "VALID" && this.address.status == "VALID" && this.mobile.status == "VALID")
    {
    return true;
    }
    else{
    return false
    }

  }


  GetEmployeebyId()
  {
    
      this.http.get<IEmployee>('https://localhost:44333/api/Employee/GetById/'+this.employeeId).subscribe((result:IEmployee)=>{
      this.employeeEmail.patchValue(result.email)  
      this.password.patchValue(result.password)
      this.firstname.patchValue(result.firstname)
      this.lastname.patchValue(result.lastname)
      this.roleid.patchValue(result.roleid)
      this.mobile.patchValue(result.mobile)
      this.address.patchValue(result.address)
      this.salary.patchValue(result.salary)
      this.imagePath.patchValue(result.imagepath) 
       
       })
  }

  upload(file:any)
  {
    
    let uploadfile=<File> file[0]
    let formdata=new FormData()
    formdata.append('file',uploadfile,uploadfile.name)
    this.service.uploadimage(formdata)
    setTimeout(() => {
      this.GetEmployeebyId()
    }, 1500);
    

  }
 
  
}
