import { Component, OnInit } from '@angular/core';
import * as models from '../data/model/models';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.less']
})
export class ContactEditComponent implements OnInit {

  contactObject: models.ContactDto;

  dialogTitle: string = 'Edit contact';
  mode: string = 'edit';

  constructor() {

  }

  ngOnInit() {
    if (typeof(this.contactObject) === 'undefined') {
      this.contactObject = <models.ContactDto>{
        firstname: '',
        lastname: '',
        emailAddresses: [''],
        phoneNumbers: [''],
        addresses: [<models.AddressDto>{
          street: '',
          number: '',
          city: '',
          zip: '',
          country: ''
        }],
        birthday: new Date()
      };
      this.dialogTitle = 'Add new contact';
      this.mode = 'new';
    }

  }

  unsetAddress(index: number) : void {
    this.contactObject.addresses.splice(index, 1);
  }

  addAddress() : void {
    this.contactObject.addresses.push(<models.AddressDto>{
      street: '',
      number: '',
      city: '',
      zip: '',
      country: ''
    });
  }

  unsetMail(index: number) : void {
    this.contactObject.emailAddresses.splice(index, 1);
  }

  addMail() : void {
    this.contactObject.emailAddresses.push('');
  }

  unsetPhone(index: number) : void {
    this.contactObject.phoneNumbers.splice(index, 1);
  }

  addPhone() : void {
    this.contactObject.phoneNumbers.push('');
  }
}
