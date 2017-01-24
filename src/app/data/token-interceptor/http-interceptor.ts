import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptionsArgs, Request, Response, ConnectionBackend, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpInterceptor extends Http {

  constructor (backend : ConnectionBackend, options : RequestOptions) {
    let token : string = '123456';
    options.headers.set('Authorization', `Bearer ${token}`);
    super(backend, options);
  }

  request (url : string | Request, options? : RequestOptionsArgs) : Observable<Response> {
    let token : string = '123456';
    if (typeof url === 'string') { // meaning we have to add the token to the options, not in url
      if (!options) {
        // let's make option object
        options = {headers: new Headers()};
      }
      options.headers.set('Authorization', `Bearer ${token}`);
    } else {
      // we have to add the token to the url object
      url.headers.set('Authorization', `Bearer ${token}`);
    }
    return super.request(url, options);
  }

}
