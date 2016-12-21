import { Component, Input } from "@angular/core";

export interface ContactsListItem {
  firstname : 'string',
  lastname : 'string',
  image : 'string'
}

@Component({
  selector: 'contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.less'],
})
export class ContactsListComponent {

  @Input()
  contactList : ContactsListItem[];

  private value : string = 'Harvey';

  constructor () {
  }

  private onKeyup (searchInput : string) {
  }
}
