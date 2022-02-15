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

interface IChatMessage {
  firstName: string
  text: string
  imagePath:string
  sender:number
}

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  id:number= parseInt(localStorage.getItem('id') as string);
  update:number = 0;
  messages:IChatMessage[] = [];
  constructor(private dialog:MatDialog, @Inject(MAT_DIALOG_DATA)public data:{}, private http:HttpClient) { }

  ngOnInit(): void {
    this.getMessages();
    this.realTimeUpdate();
  }

  getMessages(){
    this.http.get<IChatMessage[]>('https://localhost:44333/api/Message/GetAll')
    .subscribe((res:IChatMessage[])=>{
      if(this.messages.length !== res.length){
        this.messages = res;
        this.update = 0;
        this.scrollDown();
      } else {
        this.update++;
      }
    })
  }

  sendMessage(input:any){
    let temp:string=input.value;
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

  realTimeUpdate(){
    setTimeout(async () => {
      await this.getMessages();
      setTimeout(async () => {
        await this.realTimeUpdate();
      }, 1000 + (this.update*250));
    }, 1000 + (this.update*100));
  }

  scrollDown(){
    // let div = document.getElementById('MessagesDivScroll') as HTMLElement;
    // div.scrollTop = div.scrollHeight - 1;
    // console.log(div.scrollTop);
    // console.log(div.scrollHeight);
  }
}
