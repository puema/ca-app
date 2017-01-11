import { Component, OnInit } from '@angular/core';

export interface IContactDetails {
  image : string;
  firstName : string,
  lastName : string,
  mobile : string[],
  mail : string[],
  address : string[],
  birthday : string
}

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.less'],
})
export class ContactDetailsComponent implements OnInit {

  contact : IContactDetails = {
    image: '/assets/harvey-specter.jpeg',
    firstName: 'Harvey',
    lastName: 'Spectre',
    mobile: [
      '+49123456789',
      '+432345678901'
    ],
    mail: [
      'harvey.spectre@psl.com'
    ],
    address: [
      '601 E 54th St',
      'New York City',
      'New York',
      '10000'
    ],
    birthday: '19.11.1983'
  };

  constructor () {
  }

  ngOnInit () {
  }

}
