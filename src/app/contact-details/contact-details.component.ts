import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { ContactDto } from '../data/model/ContactDto';
import { hashCode, numToHSL, getContactColor } from '../utils/color-util';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.less'],
})
export class ContactDetailsComponent implements OnInit {

  @Input()
  contact : ContactDto;

  @Output()
  editMode = new EventEmitter();

  constructor () {
  }

  ngOnInit () {
  }

  private getColor (contact : ContactDto) : string {
    return getContactColor(contact);
  }

  enableEdit() : void {
    this.editMode.emit();
  }

  get contactBirthday () : string {
    if (this.contact.birthday.toString() === '0001-01-01T00:00:00') {
      return '';
    } else {
      this.contact.birthday;
    }
  }
}
