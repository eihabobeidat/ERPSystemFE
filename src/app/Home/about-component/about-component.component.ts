import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/service/AboutService/about.service';
import { SpinnerComponent } from 'src/app/Shared/spinner/spinner.component';

@Component({
  selector: 'app-about-component',
  templateUrl: './about-component.component.html',
  styleUrls: ['./about-component.component.css']
})
export class AboutComponentComponent implements OnInit {
  constructor(public service:AboutService) { }

  ngOnInit(): void {
    this.service.GetPage(41);
    this.service.GetServices();
  }

}
