import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/User/user.service';

export interface IQulafication{

  title:string,
  filepath:string,
  time:Date,
}
@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationComponent implements OnInit {
  afuConfig = {
    uploadAPI: {
      url:"https://example-file-upload-api"
    }
};

  qulfication= new FormGroup({
  title:new FormControl('',[Validators.required])
  });

  
  constructor(public service:UserService) {
    this.service.GetMyQual();
    console.log(this.service.qual);
    
   }

   displayedColumns: string[] = ['title' ,'time', 'filepath'];

  ngOnInit(): void {
  }

  NewQualfication(file:any){
    let id:any=localStorage.getItem('id');
    let uploadfile=<File>file[0];
    let form=new FormData();
    form.append('title',this.qulfication.value.title)
    form.append('filepath',uploadfile,uploadfile.name)
    form.append('Employeeid',id)

    this.service.NewQualfication(form);

    setTimeout(() => {
      this.service.GetMyQual()
    }, 3000);

    this.qulfication.reset()

  }

  


}
