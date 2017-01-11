import { Injectable, Inject } from '@angular/core';
import { ApiInstantiator } from './ApiInstantiator';
import { ContactDto } from './model/ContactDto';
import { Observable } from 'rxjs';
import { ContactsApi } from './api/ContactsApi';

@Injectable()
@Inject(ApiInstantiator)
export class ContactsService {
  private endpoint : ContactsApi;
  // private endpoint : MockApi;

  private Contacts : ContactDto[];

  constructor(private apiInst : ApiInstantiator) {
    //TODO switch to real api when going prod
    this.endpoint = apiInst.initContactsApi();
    // this.endpoint = apiInst.initMockApi();
  }

  public getContacts() : Observable<ContactDto> {
    return this.endpoint.contactsGetAll();
  }

}
