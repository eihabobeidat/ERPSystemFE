import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import ZoomMtgEmbedded from "@zoomus/websdk/embedded";

interface ISignature {
  signature:string
}

interface IApiMeet {
  id:string
  password:string
  start_url:string
}

interface IMeeting {
  uuid: string
  id: number
  host_id: string
  host_email: string
  topic: string
  type: number
  status: string
  start_time: Date
  duration: number
  timezone: string
  agenda: string
  created_at: Date
  start_url: string
  join_url: string
  password: string
  h323_password: string
  pstn_password: string
  encrypted_password: string
  settings: any
  pre_schedule: boolean
}

@Component({
  selector: 'app-video-meet',
  templateUrl: './video-meet.component.html',
  styleUrls: ['./video-meet.component.css']
})

export class VideoMeetComponent implements OnInit {
 

  email = localStorage.getItem('email') as string;
  jwtToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6IjhXTmlldzNpVG02Yl9FUEI0MTRzUWciLCJleHAiOjE2NzcxMDI4NDAsImlhdCI6MTY0NTU2MTUzMX0.fnvkuLNZCD-ONCrlF3fOs3Rd21pOyUECwFFuNCX55Ow'
  meeting = {
    topic: "ERP System Meeting",
    type: 2,
    start_time: "2019-06-14T10: 21: 57",
    duration: "45",
    timezone: "Europe/Madrid",
    agenda: "test",
    recurrence:
    {
      type: 1,
      repeat_interval: 1
    },
    settings: 
    {
      host_video: "true",
      participant_video: "true",
      join_before_host: "false",
      mute_upon_entry: "False",
      watermark: "true",
      audio: "voip",
      auto_recording: "cloud"
    }
  }

  client = ZoomMtgEmbedded.createClient();
  apiKey = '8WNiew3iTm6b_EPB414sQg'
  signature = ''
  meetingNumber = '' //api post // useruser
  password = ''// api post    // useruser
  userName = this.email.split('@')[0]; //lS
  userEmail = this.email; //ls
  role = 0;
  constructor(private http:HttpClient) { }
  adminstart():boolean{
    if(localStorage.getItem('role')==='Admin')
    {
      return true;
    }
    return false;
  }
  initiateMeeting(){
    let meetingSDKElement = document.getElementById('meetingSDKElement') as HTMLElement;

    this.client.init({
      debug: true,
      zoomAppRoot: meetingSDKElement,
      language: 'en-US',
      customize: {
        meetingInfo: ['topic', 'host', 'mn', 'pwd', 'telPwd', 'invite', 'participant', 'dc', 'enctype'],
        toolbar: {
          buttons: [
            {
              text: 'Custom Button',
              className: 'CustomButton',
              onClick: () => {
                console.log('custom button');
              }
            }
          ]
        }
      }
    });
  }

  getSignature(meetNum:string,meetPass:string){
    this.http.post<ISignature>('https://zoom-signture-gen-tahaluf.herokuapp.com/', {
      meetingNumber: meetNum,
      role: this.role
    }).subscribe( res => {
      this.signature = res.signature;
      this.joinMeeting(meetNum,meetPass);
    }, err => {
      console.log('No internet connection');
    })
  }

  startMeeting(link:HTMLElement){
    this.http.get<IApiMeet>('https://localhost:44333/api/Zoom')
    .subscribe( res => {
      console.log(res);
      this.password = res.password;
      this.meetingNumber = res.id;
      link.setAttribute('href',res.start_url);
      link.click();
      
      this.http.post('https://localhost:44333/api/Message/Insert',{text:" Join Our ERP System Meeting using            Meeting Number :" + this.meetingNumber + "   Password: " + this.password ,
      sender:parseInt(localStorage.getItem('id') as string),
      time:new Date()})
      .subscribe(res=>{
      })
    })
    
    
  }

  joinMeeting(meetNum:string,meetPass:string){
    this.client.join({
      apiKey: this.apiKey,
      signature: this.signature,
      meetingNumber: meetNum,
      password: meetPass,
      userName: this.userName,
      userEmail: this.userEmail
    })
  }

  ngOnInit(): void {
    this.initiateMeeting();
  }

}
