import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/User/user.service';

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

  title=new FormControl('',[Validators.required]);
  constructor(public service:UserService) {
    this.service.GetMyQual();
   }

  ngOnInit(): void {
  }
  NewQualfication(file:any){
    let id:any=localStorage.getItem('id');
    let uploadfile=<File>file[0];
    let form=new FormData();
    form.append('title',this.title.value)
    form.append('filepath',uploadfile,uploadfile.name)
    form.append('Employeeid',id)

    this.service.NewQualfication(form);

  }

  


}
