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

  constructor (private apiInst : ApiInstantiator) {
    this.endpoint = apiInst.initContactsApi();
  }

  public getContacts () : Observable<ContactDto[]> {
    return this.endpoint.contactsGetAll();

    // return Observable.create(observer => {
    //   // Yield a single value and complete
    //   observer.next(require('../../../contactMock.json'));
    //   observer.complete();
    //
    // });
  }

}
