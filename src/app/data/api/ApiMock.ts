'use strict';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class MockApi {

  contacts = require('../../../../contactMock.json');

  public contactsGetAll () : Observable<any> {
    return this.contacts;
  }

}
