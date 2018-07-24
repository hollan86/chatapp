import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import {Router} from '@angular/router';
declare var $ :any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username :String;
  password :String;

  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
    $(document).ready(function(){
      $('.modal').modal();
    });  
  }

  onSubmitCreds(){
    const creds = {
      "username":this.username,
      "password":this.password
    }
    this.authService.authUser(creds).subscribe(
      data =>{
      console.log(data)
      this.authService.storeUserData(data.token, data.user);
      if(this.authService.redirectUrl){
        this.router.navigate([this.authService.redirectUrl]);
        this.authService.redirectUrl = undefined;
      }
      else {
        this.router.navigate(['panel']);
      }
    },
    error => {
      if(error.hasOwnProperty('non_field_errors')){
        alert('Rejected: ' + error.non_field_errors.join());
      }
    }
  )
  }

}
