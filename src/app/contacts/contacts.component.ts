import { Component, OnInit, Output } from "@angular/core";
import { ContactsService } from "../data/contacts.service";


@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less'],
  providers: [ContactsService]
})
export class ContactsComponent implements OnInit {

  @Output()
  contacts : any;

  constructor(private contactsService : ContactsService ) {

  }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }

}
