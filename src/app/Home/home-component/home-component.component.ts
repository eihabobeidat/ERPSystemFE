import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from 'src/app/app.component';

import { HomeServiceService } from 'src/app/service/home-service.service';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  data:any[]=[{}]
  constructor(config: NgbCarouselConfig , public service:HomeServiceService , public app:AppComponent) { 
    config.interval = 2000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = false;  
    service.getTopTenEmployee();
    service.getCellImage();
  }
  


  ngOnInit(): void {
  }

  
}
