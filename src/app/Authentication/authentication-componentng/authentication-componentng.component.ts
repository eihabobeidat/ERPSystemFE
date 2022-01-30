import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication-componentng',
  templateUrl: './authentication-componentng.component.html',
  styleUrls: ['./authentication-componentng.component.css']
})
export class AuthenticationComponentngComponent implements OnInit {

  constructor() { }

  displayLogin()
  {
    const container = document.querySelector('.container-box') as HTMLButtonElement;
    container.classList.remove("right-panel-active");
  }

  displayRegister() 
  {
    const container = document.querySelector('.container-box') as HTMLButtonElement;
    container.classList.add("right-panel-active");
  }

  ngOnInit(): void {
  }

}
