import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Contact, MessageService } from '../message.service';
import { AuthService } from '../../../services/auth.service';
declare var ReconnectingWebSocket:any;

@Component({
  selector: 'app-message-chat',
  templateUrl: './message-chat.component.html',
  styleUrls: ['./message-chat.component.css']
})
export class MessageChatComponent implements OnInit {

  contacts$: Observable<Contact[]>;
  contact$: Observable<Contact>;
  chatsocket: WebSocket;
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private service: MessageService
  ) { }

  ngOnInit() {
    //to is mine!
    this.route.params.subscribe(params => {
      console.log('Route changed!....');
      
      if (this.chatsocket != undefined){
        console.log('CLOSING CHAT SOCKET');
        location.reload(true);
        this.chatsocket.close();
      }
      
      document.getElementById("msg-list").innerHTML = "";
    this.contacts$ = this.service.getContacts();
    this.contact$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getContact(params.get('id')))
    );
    this.initchat();
  });
  }

  ngDoCheck(){
    if(!this.authService.loggedIn()){
      alert('Your session has expired');
      this.router.navigate(['login']);
    }
  }

  initchat(){
    this.setupChatListeners(this.setupSocket());
    // this.setupSocket();
  }

  setupSocket(){
    var loc = window.location
    var wsStart = 'ws://'
    if (loc.protocol == 'https:'){
        wsStart == 'wss://'
    }

    var endpoint = wsStart + loc.host + loc.pathname + '?'+ localStorage.getItem('id_token');
    console.log(endpoint)

    // this.chatsocket = new WebSocket(endpoint)
    this.chatsocket = new ReconnectingWebSocket(endpoint)
    
    // var socket = 
    
    this.chatsocket.onmessage = function(e){
        if (JSON.parse(e.data).hasOwnProperty("init")){
          console.log(JSON.parse(e.data).init);
          for (let i=0;i < JSON.parse(e.data).init.length;i++){
            let lin = <NodeList> document.getElementById('message_template').childNodes
            let li = <HTMLLIElement> lin[0].cloneNode(true);

            li.className = JSON.parse(e.data).init[i].hasOwnProperty("me")?"message right-align":"message left-align";
            let msg_ = JSON.parse(e.data).init[i].hasOwnProperty("me")? JSON.parse(e.data).init[i].me : JSON.parse(e.data).init[i].other;
            // li.className = 'message left-align'
            li.childNodes[1].childNodes[0].appendChild(document.createTextNode(msg_));
            document.getElementById("msg-list").appendChild(li);
            //scrolling the end of the list
            document.getElementById("msg-list").scrollTop = document.getElementById("msg-list").scrollHeight;
          }
        }
        else {
          console.log('message',e.data)
          if(JSON.parse(e.data).user != JSON.parse(localStorage.getItem('user')).username || JSON.parse(e.data).user == 'bot'){
            let lin = <NodeList> document.getElementById('message_template').childNodes
            let li = <HTMLLIElement> lin[0].cloneNode(true);
            li.className = 'message left-align';
            li.childNodes[1].childNodes[0].appendChild(document.createTextNode(JSON.parse(e.data).msg));
            document.getElementById("msg-list").appendChild(li);
            //scrolling the end of the list
            document.getElementById("msg-list").scrollTop = document.getElementById("msg-list").scrollHeight;
          }
        }
    }
    this.chatsocket.onopen = function(e){
        console.log('open',e)
    }
    this.chatsocket.onerror = function(e){
        console.log('error',e)
    }
    this.chatsocket.onclose = function(e){
        console.log('close',e)
    }
    return this.chatsocket;
  }

  setupChatListeners(sock){
    // const socket = sock;
    let inputbox = <HTMLInputElement> document.getElementById('inputbox');
    //let messages = document.getElementsByClassName('messages');
    inputbox.addEventListener('keyup', function (event){
        if(event.keyCode === 13){
            if(this.value != ''){
                // console.log(this.value);
                let msg = {
                  "msg":this.value,
                  "user":JSON.parse(localStorage.getItem('user')).username
                }
                sock.send(JSON.stringify(msg));
                let lin = <NodeList> document.getElementById('message_template').childNodes
                let li = <HTMLLIElement> lin[0].cloneNode(true);
                //adding classname
                let myArray = ["message left-align","message right-align"];
                // let name = myArray[Math.floor(Math.random() * myArray.length)];
                let name = 'message right-align';
                li.className = name;
                li.childNodes[1].childNodes[0].appendChild(document.createTextNode(this.value));
                document.getElementById("msg-list").appendChild(li);
                //scrolling the end of the list
                document.getElementById("msg-list").scrollTop = document.getElementById("msg-list").scrollHeight;
                inputbox.value = '';
            }
            
        }
    })
  }

}
