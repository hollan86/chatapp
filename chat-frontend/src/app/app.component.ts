import { Component, OnInit } from '@angular/core';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';
declare var $ :any;
// import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  users:any = [];

  constructor(
    private authService:AuthService,
    private router:Router,
  ) { }

  ngOnInit(){
    // $(document).ready(function(){
    //   $('input.autocomplete').autocomplete({
    //     data: {
    //       "Apple": null,
    //       "Microsoft": null,
    //       "Google": 'https://placehold.it/250x250'
    //     },
    //   });
    // });
  }

  // onTyping(val){
  //   this.authService.search(val).subscribe(
  //     data => {
  //       // console.log(data)
  //       this.users = <Object>data;
  //       console.log('USERS: ',this.users)
  //     },
  //     error => {
  //       alert('Error: '+error);
  //     }
  //   )
  // }
  onLogoutClick(e){
    e.preventDefault();
    // console.log('logout clicked!!!!');
    
    // $('.sidenav').sidenav('close');
    this.authService.logout();
    this.router.navigate(['/']);
    this.closeNav();
  }
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
      document.body.style.backgroundColor = "white";
  }
}
