import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'contacts-list-element',
  templateUrl: './contacts-list-element.component.html',
  styleUrls: ['./contacts-list-element.component.less'],
})
export class ContactsListElementComponent implements OnInit {

  @Input()
  contact : any;

  constructor() { }

  ngOnInit() {
  }

}
