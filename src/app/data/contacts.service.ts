import { Injectable, Inject } from '@angular/core';
import { ApiInstantiator } from './ApiInstantiator';
import { ContactDto } from './model/ContactDto';
import { Observable } from 'rxjs';
import { ContactsApi } from './api/ContactsApi';

@Injectable()
@Inject(ApiInstantiator)
export class ContactsService {
  private endpoint : ContactsApi;
  private useMock : boolean = false;

  constructor (private apiInst : ApiInstantiator) {
    this.endpoint = apiInst.initContactsApi();
  }

  public getContacts () : Observable<ContactDto[]> {
    if (this.useMock) {
      return Observable.create(observer => {
        // Yield a single value and complete
        observer.next(require('../../../contactMock.json'));
        observer.complete();

      });
    } {
      return this.endpoint.contactsGetAll();
    }

  }

  public addContact(contact: ContactDto) : Observable<ContactDto> {
    if (this.useMock) {
      return Observable.create(observer => {
        // Yield a single value and complete
        observer.next(contact);
        observer.complete();

      });
    } {
      return this.endpoint.contactsAdd(contact);
    }
  }

  public updateContact(contact: ContactDto) : Observable<ContactDto> {
    if (this.useMock) {
      return Observable.create(observer => {
        // Yield a single value and complete
        observer.next(contact);
        observer.complete();

      });
    } {
      return this.endpoint.contactsUpdate(contact);
    }
  }

  public deleteContact(contact: ContactDto) : Observable<ContactDto> {
    if (this.useMock) {
      return Observable.create(observer => {
        // Yield a single value and complete
        observer.next(contact);
        observer.complete();

      });
    } {
      return this.endpoint.contactsDelete(contact.id);
    }
  }

  public setMock(state: boolean) : void {
    this.useMock = state;
  }
}
