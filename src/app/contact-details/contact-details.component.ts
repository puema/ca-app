import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.less']
})
export class ContactDetailsComponent implements OnInit {

  contact : {} = {
    firstname: "Andreas",
    lastname: "Mock",
    mobile: [
      "+49123456789",
      "+432345678901"
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
