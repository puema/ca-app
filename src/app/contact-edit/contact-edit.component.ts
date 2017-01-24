import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import * as models from '../data/model/models';
import {getContactColor, hashCode} from "../utils/color-util";
import { ContactDto } from '../data/model/ContactDto';
import { AddressDto } from '../data/model/AddressDto';

interface FileReaderEventTarget extends EventTarget {
  result: string;
}

interface FileReaderEvent extends Event {
  target: FileReaderEventTarget
}

const INITIAL_CONTACT : ContactDto = {
  firstname: '',
  lastname: '',
  emailAddresses: [],
  phoneNumbers: [],
  addresses: [],
  birthday: undefined
};

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.less']
})
export class ContactEditComponent implements OnInit {

  @Input()
  contact : ContactDto;

  @Output()
  saved = new EventEmitter<ContactDto>();

  @Output()
  canceled = new EventEmitter();

  @Output()
  added = new EventEmitter<ContactDto>();

  @Output()
  deleted = new EventEmitter<ContactDto>();

  editObject: ContactDto;

  dialogTitle: string = 'Add new contact';
  editExisting: boolean = false;
  draggedOver: boolean = false;

  constructor() {

  }

  ngOnInit() {
      if (this.contact) {
        this.editObject = this.clone(this.contact);
        this.editExisting = true;
        this.dialogTitle = 'Edit contact';
      } else {
        this.resetEditObject();
        this.editExisting = false;
        this.dialogTitle = 'Add new contact';
      }
  }

  onSaved () {
    let b64Prefix : string = 'data:image/jpeg;base64,';
    if (typeof(this.editObject.image) !== 'undefined' && this.editObject.image.indexOf(b64Prefix) !== -1) {
      this.editObject.image = this.editObject.image.substring(b64Prefix.length);
    }

    delete this.editObject.imageUri;

    this.contact = this.clone(this.editObject);
    this.resetEditObject();

    if (this.editExisting === true) {
      this.saved.emit(this.contact);
    } else {
      this.added.emit(this.contact);
    }
  }

  onCanceled () {
    this.editObject = this.clone(this.contact);
    this.canceled.emit();
  }

  onDeleted () {
    this.resetEditObject();
    this.deleted.emit(this.contact);
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
    if (!this.editObject.addresses) {
      this.editObject.addresses = [];
    }
    this.editObject.addresses.push({
      street: '',
      number: '',
      city: '',
      zip: '',
      country: {
        name: ''
      }
    });
  }

  unsetMail(index: number) : void {
    this.editObject.emailAddresses.splice(index, 1);
  }

  addMail() : void {
    if (!this.editObject.emailAddresses) {
      this.editObject.emailAddresses = [];
    }
    this.editObject.emailAddresses.push('');
  }

  onMailChange(mail : string, i : number) : void {
    this.editObject.emailAddresses[i] = mail;
  }

  unsetPhone(index: number) : void {
    this.editObject.phoneNumbers.splice(index, 1);
  }

  addPhone() : void {
    if (!this.editObject.phoneNumbers) {
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
    this.editObject = INITIAL_CONTACT;
  }

  private getColor (contact : models.ContactDto) : string {
    return getContactColor(contact);
  }
}
