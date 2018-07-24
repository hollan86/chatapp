import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-panel',
  templateUrl: './chat-panel.component.html',
  styleUrls: ['./chat-panel.component.css']
})
export class ChatPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initchat();
  }

  initchat(){
    this.setupChatListeners();
    this.setupSocket();
  }

  setupSocket(){
    var username = 'h2o/'
    var loc = window.location
    var wsStart = 'ws://'
    if (loc.protocol == 'https:'){
        wsStart == 'wss://'
    }

    var endpoint = wsStart + loc.host + loc.pathname + username
    console.log(endpoint)

    var socket = new WebSocket(endpoint)

    socket.onmessage = function(e){
        console.log('message',e)
    }
    socket.onopen = function(e){
        console.log('open',e)
    }
    socket.onerror = function(e){
        console.log('error',e)
    }
    socket.onclose = function(e){
        console.log('close',e)
    }
  }
  
  setupChatListeners(){
    let inputbox = <HTMLInputElement> document.getElementById('inputbox');
    //let messages = document.getElementsByClassName('messages');
    inputbox.addEventListener('keyup', function (event){
        if(event.keyCode === 13){
            if(this.value != ''){
                console.log(this.value);
                let lin = <NodeList> document.getElementById('message_template').childNodes
                let li = <HTMLLIElement> lin[0].cloneNode(true);
                //adding classname
                let myArray = ["message left appeared","message right appeared"];
                let name = myArray[Math.floor(Math.random() * myArray.length)];
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
