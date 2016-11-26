import { Component, OnInit, Output } from "@angular/core";

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less']
})
export class ContactsComponent implements OnInit {

  @Output()
  contacts : any = require('../../../contactMock.json');

  constructor() { }

  ngOnInit() {
  }

}
