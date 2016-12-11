import {Component, OnInit, Output} from "@angular/core";
import {ContactsApi} from '../data/api/ContactsApi';
import {ApiInstantiator} from '../data/ApiInstantiator';


@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less'],
  providers: [ApiInstantiator]
})
export class ContactsComponent implements OnInit {

  private endpoint : ContactsApi;

  @Output()
  contacts : any = require('../../../contactMock.json');

  constructor(private apiInst : ApiInstantiator ) {
    this.endpoint = apiInst.initContactsApi();
  }

  ngOnInit() {
  }

}
