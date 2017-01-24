import { Injectable } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TokenResource } from './data/token/token-resource';

@Injectable()
export class LoginService {
  private _isUserLoggedIn : boolean = false;
  private token : string;

  static readonly LOGIN_URL : string = 'https://torpedomaximumauth.azurewebsites.net/account/signin';

  constructor (private route : ActivatedRoute, private tokenResource : TokenResource) {

    route.queryParams.subscribe((params : Params) => {
      let token : string = params['token'];
      if (token) {
        this.tokenResource.updateToken(params['token']);
        this.tokenResource.persistToken();
        this._isUserLoggedIn = true;
        window.location.href = window.location.origin;
      }
    });

  }

  isUserLoggedIn () : boolean {
    this._isUserLoggedIn = !!this.tokenResource.getToken();
    return this._isUserLoggedIn;
  }

  logout () {
    this.tokenResource.resetToken();
      window.location.href = window.location.origin;
  }

}
