import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'contacts-list-body',
  templateUrl: './contacts-list-body.component.html',
  styleUrls: ['./contacts-list-body.component.less'],
})
export class ContactsListBodyComponent implements OnInit {

  @Input()
  contactList : any;

  constructor() { }

  ngOnInit() {
  }

}
