import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AdminService } from 'src/app/service/AdminService/admin.service';

@Component({
  selector: 'app-imageslider-manage',
  templateUrl: './imageslider-manage.component.html',
  styleUrls: ['./imageslider-manage.component.css']
})
export class ImagesliderManageComponent implements OnInit {

  constructor(public service:AdminService , private formBulider:FormBuilder) { }

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

    // console.log(images);
    //   let formdata=new FormData()
    // //  let formdata:FormData=[];
    //   for(let i=0;i<images.count;i++)
    //   {
    //     let uploadfile=<File> images[i]

    //    formdata.append('images'+i,uploadfile,uploadfile.name)


     
     

      // console.log(formdata);
    
    
  }




// if(images)
//     {

//     this.service.InsertId();
//     for(let i=0;i<images.length;i++)
//     {
//       let formdata1=new FormData();

//       formdata1.append("image",images[i],images[i].name);
//       this.service.UploadImageSlider(formdata1);
//     }