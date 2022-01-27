import { Component, OnInit } from '@angular/core';
declare const openNavBar: any;

@Component({
  selector: 'app-main-navbar-component',
  templateUrl: './main-navbar-component.component.html',
  styleUrls: ['./main-navbar-component.component.css']
})
export class MainNavbarComponentComponent implements OnInit {
  
  callFun() {
    openNavBar();
  }
  accountStatus: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
