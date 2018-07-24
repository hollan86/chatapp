import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';

export class Contact {
  constructor(public id: number, public name: string) { }
}

const CONTACTS = [
  new Contact(7, 'user7'),
  new Contact(2, 'user1'),
  new Contact(3, 'user3'),
  new Contact(4, 'user4'),
  new Contact(5, 'user5'),
  new Contact(6, 'user6')
];

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private authservice:AuthService) { }
  getContacts() { return of(CONTACTS); }
  
    getContact(id: number | string) {
      return this.getContacts().pipe(
        // (+) before `id` turns the string into a number
        map(contacts => contacts.find(contact => contact.id === +id))
      );
    }
  getChats(){
    return <any>this.authservice.getChats();
  }
}
