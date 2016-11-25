import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'contacts-list-body',
  templateUrl: './contacts-list-body.component.html',
  styleUrls: ['./contacts-list-body.component.less'],
  inputs: ['contactList']
})
export class ContactsListBodyComponent implements OnInit {

  contactList;

  constructor() { }

  ngOnInit() {
  }

}
