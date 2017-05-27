import { Component, OnInit } from '@angular/core';
import { IContact } from "../interfaces";
import { ContactsService } from "./contacts.service";

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts: IContact[];
  constructor(
    private _contactsService: ContactsService
  ) { }

  ngOnInit() {
    this.contacts = this._contactsService.getContacts();
  }

}
