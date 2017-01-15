import { Component, OnInit, Input } from '@angular/core';
import { ContactDto } from '../data/model/ContactDto';
import { hashCode, numToHSL, getContactColor } from '../utils/color-util';
import  {ContactEditComponent } from '../contact-edit/contact-edit.component';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.less'],
})
export class ContactDetailsComponent implements OnInit {

  @Input()
  contact : ContactDto;

  dialogRef: MdDialogRef<ContactEditComponent>;

  constructor (public dialog: MdDialog) {
  }

  ngOnInit () {
  }

  private getColor (contact : ContactDto) : string {
    return getContactColor(contact);
  }

  openEditDialog () : void {
    console.log('opening');
    this.dialogRef = this.dialog.open(ContactEditComponent, {
      disableClose: false,
      width: '500px'
    });
    this.dialogRef.componentInstance.contactObject = this.contact;

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('result: ' + result);
      this.dialogRef = null;
    });
  }
}
