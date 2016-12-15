import { Component, Input } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  selector: 'contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.less'],
})
export class ContactsListComponent {

  @Input()
  contactList : any[];

  private searchTerm = new Subject<string>();

  constructor () {
  }

  searchContacts(term: string) : void {
    console.log(term);
    this.searchTerm.next(term);
  }
}
