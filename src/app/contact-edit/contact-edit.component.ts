import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import * as models from '../data/model/models';
import {getContactColor} from "../utils/color-util";

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.less'],
  inputs: [
    'contact'
  ]
})
export class ContactEditComponent implements OnInit {

  @Input()
  _contact: any; // Todo set ContactsDto as soon as phoneNumbers are available

  @Output()
  saved = new EventEmitter<any>();

  @Output()
  canceled = new EventEmitter();

  @Output()
  deleted = new EventEmitter<any>();

  editObject: any;
  dialogTitle: string = 'Add new contact';
  editExisting: boolean = false;

  constructor() {

  }

  ngOnInit() {
    this.resetEditObject();
  }

  get contact(): any {
    return this._contact;
  }

  @Input()
  set contact(value: any) {
    if (typeof(value) !== 'undefined') {
      this._contact = value;
      this.editObject = this.clone(this._contact);
      this.editExisting = true;
      this.dialogTitle = 'Edit contact';
    } else {
      this.resetEditObject();
      this.editExisting = false;
      this.dialogTitle = 'Add new contact';
    }
  }

  onSaved () {
    this._contact = this.clone(this.editObject);
    this.resetEditObject();
    this.saved.emit(this._contact);
  }

  onCanceled () {
    this.editObject = this.clone(this._contact);
    this.canceled.emit();
  }

  onDeleted () {
    this.resetEditObject();
    this.deleted.emit(this._contact);
  }

  unsetAddress(index: number) : void {
    this.editObject.addresses.splice(index, 1);
  }

  addAddress() : void {
    if (typeof(this.editObject.addresses) === 'undefined') {
      this.editObject.addresses = [];
    }
    this.editObject.addresses.push(<models.AddressDto>{
      street: '',
      number: '',
      city: '',
      zip: '',
      country: ''
    });
  }

  unsetMail(index: number) : void {
    this.editObject.emailAddresses.splice(index, 1);
  }

  addMail() : void {
    if (typeof(this.editObject.emailAddresses) === 'undefined') {
      this.editObject.emailAdddresses = [];
    }
    this.editObject.emailAddresses.push('');
  }

  unsetPhone(index: number) : void {
    this.editObject.phoneNumbers.splice(index, 1);
  }

  addPhone() : void {
    if (typeof(this.editObject.phoneNumbers) === 'undefined') {
      this.editObject.phoneNumbers = [];
    }
    this.editObject.phoneNumbers.push('');
  }

  private clone(item: any) : any {
    let newItem = item;
    if (item && typeof item === "object") {
      newItem = Object.prototype.toString.call(item) === "[object Array]" ? [] : {};
      for (var i in item) {
        newItem[i] = this.clone(item[i]);
      }
    }
    return newItem;
  }

  private resetEditObject() : void {
    this.editObject = <models.ContactDto>{
      firstname: '',
      lastname: '',
      emailAddresses: [''],
      phoneNumbers: [''],
      addresses: [<models.AddressDto>{
        street: '',
        number: '',
        city: '',
        zip: '',
        country: ''
      }],
      birthday: new Date()
    };
  }

  private getColor (contact : models.ContactDto) : string {
    return getContactColor(contact);
  }
}
