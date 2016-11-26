import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.less'],
})
export class ContactsListComponent implements OnInit {

  @Input()
  contactList: any[];

  constructor() { }

  ngOnInit() {
  }

}
