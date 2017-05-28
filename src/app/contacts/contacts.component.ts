import { Component, OnInit } from '@angular/core';
import { MdDialog } from "@angular/material";
import { IContact } from "../interfaces";
import { ContactsService } from "./contacts.service";
import { AddContactDialog } from "./add-contact/add-contact.dialog";

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts: IContact[];
  constructor(
    private _contactsService: ContactsService,
    public dialog: MdDialog
  ) { }

  ngOnInit() {
    this.contacts = this._contactsService.getContacts();
  }

  add(): void {
    let dialogRef = this.dialog.open(AddContactDialog);

    dialogRef.afterClosed().subscribe((contact) => {
      if (contact) {
        this.contacts.push(contact);
      }
    })
  }

  delete(contact: IContact) {
    this.contacts.splice(this.contacts.indexOf(contact), 1);
  }

}
