import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { HomeServiceService } from 'src/app/service/home-service.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  constructor(public service:HomeServiceService,public app:AppComponent) { 
    this.service.getHomeTestimonial()

  }

  ngOnInit(): void {
    setTimeout(() => {
      document.getElementById("myCarouselnextitem")?.click()
    }, 6000);
  }

}
