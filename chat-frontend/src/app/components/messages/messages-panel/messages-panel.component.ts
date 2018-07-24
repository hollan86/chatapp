import { Component, OnInit } from '@angular/core';
import { Contact, MessageService } from '../message.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-messages-panel',
  templateUrl: './messages-panel.component.html',
  styleUrls: ['./messages-panel.component.css']
})
export class MessagesPanelComponent implements OnInit {
  contacts$: Observable<Contact[]>;
  private selectedId: number;
  ctcheck = false;
  // contacts = ['user1','user2','user3','user4','user5']
  constructor(
    private service: MessageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.contacts$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        // return this.service.getContacts();
        return this.service.getChats()
      })
    );
    this.contacts$.subscribe(data =>{
      if (data.length == 0){
        this.ctcheck = true;
      }
      else {this.ctcheck == false}
    })
  }

}
