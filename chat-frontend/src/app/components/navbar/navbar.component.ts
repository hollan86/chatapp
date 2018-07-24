import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
declare var $ :any;
declare var M :any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  users:any = [];
  sdata = {
    "Apple": null,
    "Microsoft": null,
    "Google": 'https://placehold.it/250x250'
  }
  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
    // $(document).ready(function(){
    //   $('input#search').autocomplete({
    //     data: this.sdata,
    //   });
    // });
    // document.addEventListener('DOMContentLoaded', function() {
    //   var elems = document.querySelectorAll('.autocomplete');
    //   var instances = M.Autocomplete.init(elems, {data:this.sdata,limit:3});
    // });
  }

  onTyping(val){
    this.authService.search(val).subscribe(
      data => {
        // console.log(data)
        let fd = {}
        this.users = <any>data;
        console.log('USERS: ',this.users)
        //CONFIGURING AUTO-COMPLETE
        /*
        this.users.forEach(element => {
          Object.defineProperty(this.sdata, element.username, {
            value: null,
            enumerable: true,
            configurable:true
          });
        });
        // $('.autocomplete').autocomplete('updateData', fd);
        // this.sdata = fd;
        let elem = document.querySelector('.autocomplete')
        var instance = M.Autocomplete.getInstance(elem);
        instance.updateData(this.sdata);
        console.log(instance)
        console.log(Object.keys(this.sdata));
        // this.sdata = Object.assign(this.sdata,instance.options.data)
        console.log(Object.keys(this.sdata));
        */
      },
      error => {
        alert('Error: '+error);
      }
    )
  }

  onSubmit(val){
    // alert('Submited: '+ val)
    // this.authService.search(val).subscribe(
    //   data => {
    //     this.router.navigate(['search'],{ queryParams: { data: this.users } });
    //   },
    //   error => {

    //   }
    // );
    this.router.navigate(['search'],{ queryParams: { data: val } });
  }

  openNav() {
    console.log(document.getElementById("mySidenav"))
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

}
