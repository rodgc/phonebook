import { Injectable } from '@angular/core';
import { IContact } from '../interfaces';

@Injectable()
export class ContactsService {

  constructor() { }

  getContacts() {
    // TODO Change to a http call
    let contacts: IContact[] = [{
      "name": "HUAN",
      "number": "1234567899"
    },{
      "name": "PRUD",
      "number": "987654321"
    },{
      "name": "HEINZX",
      "number": "123987465"
    },{
      "name": "PRUBERT",
      "number": "7894562584"
    }];
    return contacts;
  }

}
