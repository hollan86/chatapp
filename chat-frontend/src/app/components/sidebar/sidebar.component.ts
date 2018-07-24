import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import {Router} from '@angular/router';
declare var $ :any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private router:Router,
  ) { }

  ngOnInit() {
    $(document).ready(function(){
      $('.sidenav').sidenav();
    });
  }
  onLogoutClick(e){
    e.preventDefault();
    // console.log('logout clicked!!!!');
    
    $('.sidenav').sidenav('close');
    this.authService.logout();
    this.router.navigate(['/']);
  }
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
      document.body.style.backgroundColor = "white";
  }
}
