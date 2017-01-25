import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ContactDto } from '../data/model/ContactDto';
import { getContactColor } from '../utils/color-util';

@Component({
  selector: 'contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.less'],
})
export class ContactsListComponent {

  @Input()
  contacts : ContactDto[];

  @Output()
  selectedContact: EventEmitter<ContactDto> = new EventEmitter<ContactDto>();

  @ViewChild('mpBlurredScroll') mpBlurredScroll : any;

  constructor () {
  }

  private getColor (contact : ContactDto) : string {
    return getContactColor(contact);
  }

  private onClick (contact : ContactDto) : void {
    this.selectedContact.emit(contact);
  }

}
