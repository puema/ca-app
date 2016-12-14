import {Component, OnInit, Input} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.less'],
})
export class ContactsListComponent implements OnInit {

  @Input()
  contactList: any[];

  private searchTerm = new Subject<string>();

  constructor() { }

  ngOnInit() {
  }

  searchContacts(term: string) : void {
    console.log(term);
    this.searchTerm.next(term);
  }
}
