import { Component, OnInit } from '@angular/core';
import { SpinnerComponent } from 'src/app/Shared/spinner/spinner.component';

@Component({
  selector: 'app-about-component',
  templateUrl: './about-component.component.html',
  styleUrls: ['./about-component.component.css']
})
export class AboutComponentComponent implements OnInit {

  constructor() 
  {

    SpinnerComponent.show()
    setTimeout(() => SpinnerComponent.hide(), 2000);
   }

  ngOnInit(): void {
  }

}
