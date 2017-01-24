import { Injectable, Inject } from '@angular/core';
import { ApiInstantiator } from './ApiInstantiator';
import { ContactDto } from './model/ContactDto';
import { Observable } from 'rxjs';
import { ContactsApi } from './api/ContactsApi';
import { Headers, RequestOptionsArgs, URLSearchParams, Http, Response, ResponseContentType } from '@angular/http';

@Injectable()
@Inject(ApiInstantiator)
export class ContactsService {
  private endpoint : ContactsApi;
  // private endpoint : MockApi;

  constructor (private apiInst : ApiInstantiator, private http : Http) {
    this.endpoint = apiInst.initContactsApi();
  }

  public getContacts () : Observable<ContactDto[]> {
    // TODO switch to real API
    // return this.endpoint.contactsGetAll();

    // const path = 'https://torpedomaximumapi.azurewebsites.net/api/Contacts';
    //
    // let queryParameters = new URLSearchParams();
    // let headerParams = new Headers();
    // headerParams.append('Authorization', 'Bearer token1234');
    // let requestOptions : RequestOptionsArgs = {
    //   method: 'GET',
    //   headers: headerParams,
    //   search: queryParameters
    // };
    //
    // console.log(1);
    // return this.http.request(path, requestOptions)
    //   .map((response : Response) => {
    //     console.log(2);
    //     if (response.status === 204) {
    //       return undefined;
    //     } else {
    //       return response.json();
    //     }
    //   });


    return Observable.create(observer => {
      // Yield a single value and complete
      observer.next(require('../../../contactMock.json'));
      observer.complete();

    });
  }

}
