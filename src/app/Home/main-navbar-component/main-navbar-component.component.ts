import { Component, OnInit } from '@angular/core';
import { SpinnerComponent } from 'src/app/Shared/spinner/spinner.component';
declare const openNavBar: any;

@Component({
  selector: 'app-main-navbar-component',
  templateUrl: './main-navbar-component.component.html',
  styleUrls: ['./main-navbar-component.component.css']
})
export class MainNavbarComponentComponent implements OnInit {
  muteSound:boolean = true;
  playSound:boolean = false;
  callFun() {
    openNavBar();
  }
  accountStatus: boolean = false;
  constructor() 
  {
    
   }

  ngOnInit(): void {
  }

  soundOn(audio:any){
    if(this.playSound){
      this.muteSound = !this.muteSound;
      audio.muted = this.muteSound;
    } else {
      this.playSound = true;
      audio.play();
    }
  }
}
