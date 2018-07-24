import { Component, OnInit } from '@angular/core';
import { PasswordValidation } from './password-validation';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  username: String;
  password:String;
  passwordrepeat: String;

  constructor(
    fb: FormBuilder,
    private authService:AuthService,
    private router:Router
  ) { 
    this.form = fb.group({
      // define your control in you form
        username: ['', Validators.required],
        password: ['', Validators.required],
        passwordrepeat: ['', Validators.required]
      },
      {
          validator: PasswordValidation.MatchPassword // your validation method
        });
  }

  ngOnInit() {
    
  }
  ngAfterViewInit(){
  }

  onSubmitCreds(){
    let creds = {
      "username":this.username,
      "password":this.password
    }
    this.authService.register(creds).subscribe(
      data => {
        console.log(data)
        alert('Account created!');
        this.router.navigate(['login']);
      },
      error => {
        console.log(error)
        if(error.hasOwnProperty('password')){
          alert('Password rejected: ' + error.password.join());
        }
        else if (error.hasOwnProperty('username')){
          alert('Username rejected: ' + error.username.join());
        }
      }
    )
  }

}
