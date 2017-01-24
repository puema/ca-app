import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import * as models from '../data/model/models';
import {getContactColor, hashCode} from "../utils/color-util";

interface FileReaderEventTarget extends EventTarget {
  result: string;
}

interface FileReaderEvent extends Event {
  target: FileReaderEventTarget
}

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.less']
})
export class ContactEditComponent implements OnInit {

  @Input()
  _contact: any; // Todo set ContactsDto as soon as phoneNumbers are available

  @Output()
  saved = new EventEmitter<any>();

  @Output()
  canceled = new EventEmitter();

  @Output()
  added = new EventEmitter<any>();

  @Output()
  deleted = new EventEmitter<any>();

  editObject: any;

  dialogTitle: string = 'Add new contact';
  editExisting: boolean = false;
  draggedOver: boolean = false;

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
    if (typeof(this.editObject.birthday) !== 'undefined' && this.editObject.birthday === 24) { // aka 'empty' date
      delete this.editObject.birthday;
    }

    let b64Prefix : string = 'data:image/jpeg;base64,';
    if (typeof(this.editObject.image) !== 'undefined' && this.editObject.image.indexOf(b64Prefix) !== -1) {
      this.editObject.image = this.editObject.image.substring(b64Prefix.length);
    }

    delete this.editObject.imageUri;

    this._contact = this.clone(this.editObject);
    this.resetEditObject();

    if (this.editExisting === true) {
      this.saved.emit(this._contact);
    } else {
      this.added.emit(this._contact);
    }
  }

  onCanceled () {
    this.editObject = this.clone(this._contact);
    this.canceled.emit();
  }

  onDeleted () {
    this.resetEditObject();
    this.deleted.emit(this._contact);
  }

  toggleDragover(event) {
    event.stopPropagation();
    event.preventDefault();
    this.draggedOver = !this.draggedOver;
  }

  processPicture(event) {
    event.preventDefault();
    event.stopPropagation();
    this.draggedOver = false;

    let allowedTypes: string[] = ['image/jpeg', 'image/png', 'image/gif'];
    let file: File = event.dataTransfer.files[0];
    let reader: FileReader = new FileReader();
    let self = this;

    reader.onload = function(event: FileReaderEvent) : any {
      self.editObject.image = event.target.result;
      self.editObject.imageUri = event.target.result;
    };

    if (allowedTypes.indexOf(file.type) !== -1) {
      reader.readAsDataURL(file);
    }
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
      country: <models.CountryDto>{
        name: ''
      }
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
    this.editObject.phoneNumbers.push(<models.PhoneNumberDto>{
      number: ''
    });
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
    this.editObject = {
      firstname: '',
      lastname: '',
      emailAddresses: [],
      phoneNumbers: [],
      addresses: [],
      birthday: new Date().getDate()
    };
  }

  private getColor (contact : models.ContactDto) : string {
    return getContactColor(contact);
  }
}
