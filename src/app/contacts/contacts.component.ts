import { Component, OnInit } from '@angular/core';
import {ContactsListComponent} from "../contacts-list/contacts-list.component";

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less'],
  directives: [
    ContactsListComponent
  ]
})
export class ContactsComponent implements OnInit {

  contacts = require('../../../contactMock.json');

  constructor() { }

  ngOnInit() {
  }

}
