import { Component, OnInit, Output } from "@angular/core";
import { ContactsService } from "../data/contacts.service";
import { ContactDto } from '../data/model/ContactDto';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ContactEditComponent } from '../contact-edit/contact-edit.component';


@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less'],
  providers: [ContactsService]
})
export class ContactsComponent implements OnInit {

  contacts : ContactDto[];
  selectedContact : ContactDto;
  dialogRef: MdDialogRef<ContactEditComponent>;

  constructor(private contactsService : ContactsService,
  public dialog: MdDialog) {

  }

  ngOnInit () {
    this.contactsService.getContacts().subscribe((contacts : ContactDto[]) => {
      this.contacts = contacts;
    });
  }

  onSelectContact(contact : ContactDto) : void {
    this.selectedContact = contact;
  }

  openContactDialog() : void {
    console.log('opening');
    this.dialogRef = this.dialog.open(ContactEditComponent, {
      disableClose: false,
      width: '80%'
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('result: ' + result);
      this.dialogRef = null;
    });
  }
}
