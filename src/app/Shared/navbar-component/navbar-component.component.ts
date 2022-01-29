import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from 'src/app/service/home-service.service';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {

  accountStatus: boolean = false;
  constructor(public service:HomeServiceService) //public userService: UserService, private router: Router)
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
