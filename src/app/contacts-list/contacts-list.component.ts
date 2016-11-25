import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.less'],
  inputs: ['contactList']
})
export class ContactsListComponent implements OnInit {

  contactList: [{}];

  constructor() { }

  ngOnInit() {
  }

}
