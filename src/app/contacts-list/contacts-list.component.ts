import { Component, Input, ElementRef} from "@angular/core";
import {Subject} from 'rxjs';

@Component({
  selector: 'contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.less'],
})
export class ContactsListComponent {

  @Input()
  contactList : any[];

  private content = Element;
  private contentBlurred = Element;
  private searchTerm = new Subject<string>();

  constructor (private element : ElementRef) {
    this.content = element.nativeElement.getElementsByClassName('contacts-list-body');
    this.contentBlurred = element.nativeElement.getElementsByClassName('contacts-list-body-blurred');

    this.element.nativeElement.addEventListener('scroll',(e) => {
      this.contentBlurred[0].style.transform = `translate3d(0, ${-e.target.scrollTop}px, 0)`;
    }, true);

  }

  searchContacts(term: string) : void {
    console.log(term);
    this.searchTerm.next(term);
  }
}
