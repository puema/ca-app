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

  private _isViewActive : boolean = false;
  isDetailsActive : boolean = false;
  isEditingActive : boolean = false;

  constructor (private contactsService : ContactsService) {

  }

  ngOnInit () {
    this.contactsService.getContacts().subscribe((contacts : ContactDto[]) => {
      this.contacts = contacts;
    });
  }

  get isViewActive(): boolean {
    return (this.isDetailsActive || this.isEditingActive);
  }

  set isViewActive(value: boolean) {
    this._isViewActive = value;
    this.isEditingActive = false;
    this.isDetailsActive = false;
  }

  onSelectContact (contact : ContactDto) : void {
    this.selectedContact = contact;
    this.isDetailsActive = true;
    this.isEditingActive = false;
  }

  newContact () : void {
    this.selectedContact = undefined;
    this.isEditingActive = true;
    this.isDetailsActive = false;
  }

  addContact (contact : any) {
    this.contactsService.addContact(contact)
      .subscribe((addedContact) => {
        this.contacts.push(addedContact);
        this.selectedContact = addedContact;
        this.isEditingActive = false;
        this.isDetailsActive = true;
      });

  }

  updateContact (contact : any) {
    //TODO persist in backend
    this.contactsService.updateContact(contact)
      .subscribe((updatedContact) => {
        let contactIdx : number = 0;
        this.contacts.filter((element, index) => {
          if (element.id === contact.id) {
            contactIdx = index;
          }
        });

        this.contacts[contactIdx] = updatedContact;
        this.selectedContact = updatedContact;
        this.isEditingActive = false;
      });

  }

  deleteContact (contact : any) {
    //TODO persist in backend
    /*this.contactsService.deleteContact(contact)
      .subscribe((deletedContact) => {
        let contactIdx : number = 0;
        this.contacts.filter((element, index) => {
          if (element.id === deletedContact.id) {
            contactIdx = index;
          }
        });

        this.contacts.splice(contactIdx, 1);

        this.selectedContact = undefined;
        this.isDetailsActive = false;
        this.isEditingActive = false;
      });*/

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

  toggleEditing () : void {
    this.isEditingActive = !this.isEditingActive;
  }

}
