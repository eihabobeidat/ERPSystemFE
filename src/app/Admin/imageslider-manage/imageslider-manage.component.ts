import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AdminService } from 'src/app/service/AdminService/admin.service';

@Component({
  selector: 'app-imageslider-manage',
  templateUrl: './imageslider-manage.component.html',
  styleUrls: ['./style.scss']
})
export class ImagesliderManageComponent implements OnInit {

  constructor(public service:AdminService , private formBulider:FormBuilder) { 

    this.service.GetAllImage();
  }

  ngOnInit(): void {
  }

  
  UploadImageSlider(images:any){
    

    
      let formdata=new FormData();
      let uploadfile1=<File> images;
      for(let i=0;i<images.length;i++)
      {
        formdata.append("image",images[i],images[i].name);


      }


      this.service.UploadImageSlider(formdata);
   
   
  }

  
    
    
  }


