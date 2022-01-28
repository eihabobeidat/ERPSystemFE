import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {

  accountStatus: boolean = false;
  constructor(
    //public userService: UserService, private router: Router
    ) { }

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
