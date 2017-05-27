import { Component, OnInit } from '@angular/core';
import { IContact } from "../interfaces";
import { ContactsService } from "../contacts";

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {
  contacts: IContact[];
  constructor(
    private _contactsService: ContactsService
  ) { }

  ngOnInit() {
    this.contacts = this._contactsService.getContacts().slice(0,3);
  }

}
