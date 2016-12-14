import {Component, OnInit, Output} from "@angular/core";
import {ContactsApi} from '../data/api/ContactsApi';
import {ApiInstantiator} from '../data/ApiInstantiator';
import {MockApi} from '../data/api/ApiMock';


@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less'],
  providers: [ApiInstantiator]
})
export class ContactsComponent implements OnInit {

  // private endpoint : ContactsApi;
  private endpoint : MockApi;

  @Output()
  contacts : any;

  constructor(private apiInst : ApiInstantiator ) {
    //TODO switch to real api when going prod
    // this.endpoint = apiInst.initContactsApi();
    this.endpoint = apiInst.initMockApi();
  }

  ngOnInit() {
    this.contacts = this.endpoint.contactsGetAll();
  }

}
