import { Injectable } from '@angular/core';
import { ContactsApi } from "./api/ContactsApi";

@Injectable()
export class TokenInterceptorService {

  contactsApi : ContactsApi;
  constructor() {
  }

}
