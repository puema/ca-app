import {Component, OnInit, Output, Inject} from "@angular/core";
import {ContactsApi} from '../data/api/ContactsApi';
import {ApiInstantiator} from '../data/ApiInstantiator';
import {MockApi} from '../data/api/ApiMock';
import {ContactsService} from '../contacts.service';


@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less'],
  providers: [ContactsService]
})
export class ContactsComponent implements OnInit {

  @Output()
  contacts : any;

  constructor(private contactsServ : ContactsService ) {

  }

  ngOnInit() {
    this.contacts = this.contactsServ.getContacts();
  }

}
