import { Component, OnInit } from '@angular/core';
import {render} from 'creditcardpayments/creditCardPayments';
@Component({
  selector: 'app-paybal',
  templateUrl: './paybal.component.html',
  styleUrls: ['./paybal.component.css']
})
export class PaybalComponent implements OnInit {

  constructor() {
  
    
      
   }

  ngOnInit(): void {
    render(
      {
          id: "#myPaybalButton",
          currency: "USD",
          value: "100.00",
          onApprove: (details) => {
            alert("Transmission Successfull")
      
          }
        }
      )
  }
 
  

}
