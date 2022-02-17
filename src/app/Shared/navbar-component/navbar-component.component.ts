import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { HomeServiceService } from 'src/app/service/home-service.service';
@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {
  

 
  accountStatus: boolean = true;
  constructor(public service:HomeServiceService , public app:AppComponent) 
   {
     service.getImageSlider();
  }

  async ngOnInit() {
    
  }

  logOut() {
   
  }
}
