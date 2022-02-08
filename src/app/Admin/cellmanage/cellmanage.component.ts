import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/service/AdminService/admin.service';

@Component({
  selector: 'app-cellmanage',
  templateUrl: './cellmanage.component.html',
  styleUrls: ['./cellmanage.component.css']
})
export class CellmanageComponent implements OnInit {
  CellForm=new FormGroup({
    img1: new FormControl('',[Validators.required]),
    img2: new FormControl('',[Validators.required]),
    img3: new FormControl('',[Validators.required]),
    img4: new FormControl('',[Validators.required]),
    img5: new FormControl('',[Validators.required]),
    img6: new FormControl('',[Validators.required]),
    img7: new FormControl('',[Validators.required]),
    img8: new FormControl('',[Validators.required]),

  });

  constructor(public service:AdminService) { }

  ngOnInit(): void {
  }
  
  UpdateCell(file:any){
    console.log(file);
    let formdata = new FormData();

   

    let uploadfile1=<File> file[0]
    let uploadfile2=<File> file[1]
    let uploadfile3=<File> file[2]
    let uploadfile4=<File> file[3]
    let uploadfile5=<File> file[4]
    let uploadfile6=<File> file[5]
    let uploadfile7=<File> file[6]
    
    formdata.append('img1' ,uploadfile1,uploadfile1.name);
    formdata.append('img2' ,uploadfile2,uploadfile2.name);
    formdata.append('img3' ,uploadfile3,uploadfile3.name);
    formdata.append('img4' ,uploadfile4,uploadfile4.name);
    formdata.append('img5' ,uploadfile5,uploadfile5.name);
    formdata.append('img6' ,uploadfile6,uploadfile6.name);
    formdata.append('img7' ,uploadfile7,uploadfile7.name);
    console.log(formdata)

      this.service.UpdateCell(formdata);

    

  }

}
