import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../data/contacts.service';
import { ContactDto } from '../data/model/ContactDto';


@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less'],
  providers: [ContactsService]
})
export class ContactsComponent implements OnInit {

  contacts : ContactDto[];
  selectedContact : ContactDto;
  isDetailsActive : boolean = false;
  isEditingActive : boolean = false;

  constructor(private contactsService : ContactsService) {

  }

  ngOnInit () {
    this.contactsService.getContacts().subscribe((contacts : ContactDto[]) => {
      this.contacts = contacts;
    });
  }

  onSelectContact (contact : ContactDto) : void {
    this.selectedContact = contact;
    this.isDetailsActive = true;
    this.isEditingActive = false;
  }

  newContact() : void {
    this.selectedContact = undefined;
    this.isEditingActive = true;
    this.isDetailsActive = false;
  }

  addContact(contact: any) {
    //TODO persist in backend

    console.log(contact);
    //this.contactsService.addContact(contact);
    this.selectedContact = contact;
    this.contacts.push(contact);
    this.isEditingActive = false;
    this.isDetailsActive = true;
  }

  updateContact(contact: any) {
    //TODO persist in backend
    //this.contactsService.update(contact);
    let contactIdx : number = 0;
    this.contacts.filter((element, index) => {
      if (element.id === contact.id) {
        contactIdx = index;
      }
    });

    this.contacts[contactIdx] = contact;
    this.selectedContact = contact;
    this.isEditingActive = false;
  }

  deleteContact(contact: any) {
    //TODO persist in backend
    //this.contactsService.contactDelete(contact);
    //this.contactsService.getContacts().subscribe((contacts: ContactDto[]) => {
    //  this.contacts = contacts;
    //});

    let contactIdx : number = 0;
    this.contacts.filter((element, index) => {
      if (element.id === contact.id) {
        contactIdx = index;
      }
    });

    this.contacts.splice(contactIdx, 1);

    this.selectedContact = undefined;
    this.isDetailsActive = false;
    this.isEditingActive = false;
  }

  toggleEditing() : void {
    this.isEditingActive = !this.isEditingActive;
  }

}
