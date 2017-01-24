import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptionsArgs, Request, Response, ConnectionBackend, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TokenResource } from './token-resource';

@Injectable()
export class HttpInterceptor extends Http {

  private tokenResource : TokenResource = new TokenResource();

  constructor (backend : ConnectionBackend, options : RequestOptions) {
    super(backend, options);
  }

  request (url : string | Request, options? : RequestOptionsArgs) : Observable<Response> {
    if (typeof url === 'string') { // meaning we have to add the token to the options, not in url
      if (!options) {
        // let's make option object
        options = {headers: new Headers()};
      }
      options.headers.set('Authorization', `Bearer ${this.tokenResource.getToken()}`);
    } else {
      // we have to add the token to the url object
      url.headers.set('Authorization', `Bearer ${this.tokenResource.getToken()}`);
    }
    return super.request(url, options);
  }

}
