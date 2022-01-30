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
  constructor(public service:HomeServiceService , public app:AppComponent) //public userService: UserService, private router: Router)
   {
     service.getImageSlider();
  }

  async ngOnInit() {
    // if (localStorage.getItem('token')) {
    //   this.accountStatus = true;
    // }
  }

  logOut() {
    //localStorage.clear();
    //this.router.navigate(['/auth/login']);
  }
}
