import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/service/AdminService/admin.service';

@Component({
  selector: 'app-about-manage',
  templateUrl: './about-manage.component.html',
  styleUrls: ['./about-manage.component.css']
})
export class AboutManageComponent implements OnInit {
  aboutForm=new FormGroup({
    title:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
    image:new FormControl('',[Validators.required])

  });

  

  constructor(public service:AdminService) { }
  UpdateAbout(id:number,Form:any)
  {
    
    let uploadfile=<File> Form[0]
    let formdata=new FormData()
    formdata.append('Title',this.aboutForm.controls['title'].value)
    formdata.append('Description',this.aboutForm.controls['description'].value) 
    formdata.append('ImagePath',uploadfile,uploadfile.name);  
    formdata.append("Id",id.toString());

     this.service.UpdateAbout(formdata);
     this.aboutForm.reset()
    


  }
  ngOnInit(): void {
  }

}


