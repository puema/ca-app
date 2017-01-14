import { Component, OnInit, Output } from "@angular/core";
import { ContactsService } from "../data/contacts.service";
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

  constructor (private contactsService : ContactsService) {
  }

  ngOnInit () {
    this.contactsService.getContacts().subscribe((contacts : ContactDto[]) => {
      this.contacts = contacts;
    });
  }

  onSelectContact(contact : ContactDto) : void {
    this.selectedContact = contact;
  }

}
