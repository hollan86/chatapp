import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  data: object[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService:AuthService
  ) { }

  ngDoCheck(){
    if(!this.authService.loggedIn()){
      alert('Your session has expired');
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
    /*this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      //this.page = +params['page'] || 0;
      // console.log(JSON.parse(params['data']));

    });*/

    this.route.queryParamMap.pipe().subscribe(
      data => {
        console.log(data['params'].data);
        this.authService.search(data['params'].data).subscribe(
          results => {
            this.data = <any>results;
            console.log('FETCHED DATA ...',results);
          }
        )
      }
    )
  }

}
