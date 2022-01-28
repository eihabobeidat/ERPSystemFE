import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { HomeServiceService } from 'src/app/service/home-service.service';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {


  constructor(config: NgbCarouselConfig) { 
    config.interval = 2000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = false;  

  data:any[]=[{}]

  constructor(public service:HomeServiceService) {  
   this.service.getHomeTestimonial()

  }

  ngOnInit(): void {
  }

  
}
