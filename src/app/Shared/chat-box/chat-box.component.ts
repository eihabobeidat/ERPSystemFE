import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface IMessage {
  id?:number
  sender:number
  receiver?:number
  text:string
  time:Date
}

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  id:number= parseInt(localStorage.getItem('id') as string);
  messages:IMessage[];
  constructor(private dialog:MatDialog, @Inject(MAT_DIALOG_DATA)public data:{}, private http:HttpClient) { }

  ngOnInit(): void {
    this.getMessages();
  }

  getMessages(){
    //assume they are sorted from database and contains sender name name
    this.http.get<IMessage[]>('https://localhost:44333/api/Message/GetAll')
    .subscribe((res:IMessage[])=>{
      this.messages = res;
      console.log(this.messages);
    })
  }

  sendMessage(input:any){
    let temp:string=input.value;
    console.log(temp.length)
    if(temp.length > 0){
      let newMessage:IMessage = {
        text:temp,
        sender:this.id,
        time:new Date()
      }
      this.http.post('https://localhost:44333/api/Message/Insert', newMessage)
      .subscribe(res=>{
        this.getMessages();
        input.value = '';
      })
    }
  }
}
