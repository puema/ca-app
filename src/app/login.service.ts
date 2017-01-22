import { Injectable } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TokenResource } from './data/token-interceptor/token-resource';

@Injectable()
export class LoginService {
  private _isUserLoggedIn : boolean = false;
  private token : string;

  static readonly LOGIN_URL : string = 'https://torpedomaximumapi.azurewebsites.net/account/signin';

  constructor (private route : ActivatedRoute, private tokenResource : TokenResource) {

    route.queryParams.subscribe((params : Params) => {
      let token : string = params['token'];
      if (token) {
        this.tokenResource.updateToken(params['token']);
        this.tokenResource.persistToken();
      }
    });

  }

  isUserLoggedIn () : boolean {
    return this._isUserLoggedIn;
  }

}
