import { Component, OnInit, Input } from '@angular/core';
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

  constructor () {
  }

  ngOnInit () {
  }

  private getColor (contact : ContactDto) : string {
    return getContactColor(contact);
  }

}
