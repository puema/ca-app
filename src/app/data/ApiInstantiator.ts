import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ContactsApi } from './api/ContactsApi';

/**
 * Instantiation service for api typescript files.
 */
@Injectable('ApiInstantiator')
@Inject('$http', '$httpParamSerializer')
export class ApiInstantiator {

  constructor (private $http : Http) {}

  /**
   * Initialize an api object constructed by the swagger codegen. Hand in the object, get back an initialized
   * instance of it.
   *
   * Example:
   * const myApi : MyApiClass = apiInstantiator.initCdpApi(MyApiClass);
   */
  public initContactsApi () : ContactsApi {
    return this.initApi(ContactsApi, null);
  }


  private initApi (api : any, domain : string) : any {
    // Hack to ensure that we can configure the API to be on the same host (but under a different port) as
    // the app regardless of whether the app is accessed via 'localhost' or remotely.
    // domain = domain.replace('SAMEHOST', window.location.hostname);

    return new api(this.$http, domain);
  }

}
