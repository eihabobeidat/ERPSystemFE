import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cardTitle:any;
  @Input() cardImage:any;
  @Input() cardDescription:any;
  constructor() { }

  ngOnInit(): void {
  }

}
