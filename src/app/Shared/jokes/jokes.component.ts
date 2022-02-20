import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {

  constructor(public http:HttpClient) { }

  ngOnInit(): void {
  }
  Jokes(){
    //dklsnflkjnsdfgnh
  }

}
