import { Request } from '@angular/http';

import { HttpInterceptor } from 'angular2-http-interceptor/lib';

import { TokenResource } from './token-resource';


/**
 * @name TokenInterceptor
 *
 * @description
 *   A $http-interceptor that listens to outgoing $http requests an adds an
 *   authorization header for requests against the API.
 *
 */
export class TokenInterceptor implements HttpInterceptor {

  private tokenResource : TokenResource;

  constructor () {
    this.tokenResource = new TokenResource();
  }

  /**
   *  @name before
   *
   *  @description
   *   Will get called on each outgoing $http-request and add an authorization header.
   *
   *  @return request
   *   The request itself, extended with an authorization header if conditions are met.
   *
   */
  before(request : Request) : Request {

    let token : string = this.tokenResource.getToken();

    if (!request.headers.has('authorization')) {
      request.headers.append('authorization', `Bearer ${token}`);
    }

    return request;
  }
}
