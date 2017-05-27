import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from "@angular/material";

@Component({
    selector: 'add-contact',
    templateUrl: 'add-contact.dialog.html'
})

export class AddContactDialog implements OnInit {
    constructor(
        public dialogRef: MdDialogRef<AddContactDialog>
    ) { }

    ngOnInit() { }
}