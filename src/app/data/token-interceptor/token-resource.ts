const SESSION_TOKEN_NAME : string = 'torpedo.access-token';

/**
 * Access token management and persistence.
 *
 * AzureADs access token is only handed to us once, after login. To make it survive page refreshes, we persist it
 * separately from AzureAD in session storage.
 *
 * Note that persisting the token is a separate action.
 */
export class TokenResource {

  private accessToken : string = null;

  constructor () {
    this.initializeTokenFromSessionStorage();
  }

  /**
   * Clears the token.
   */
  public resetToken () : void {
    this.updateToken(null);
  }

  /**
   * @returns the token.
   */
  public getToken () : string {
    return this.accessToken;
  }

  /**
   * Stores the token.
   *
   * @param accessToken the token or null, if the token should be removed.
   */
  public updateToken (accessToken : string) : void {
    this.accessToken = accessToken;
    if (!accessToken) {
      // ensure that we always persist token removals
      this.persistToken();
    }
  }

  /**
   * Persists the current token in session storage, to make it available after the user refreshes the page.
   */
  public persistToken () : void {

    let token : string = this.getToken();

    try {
      if (token) {
        sessionStorage.setItem(SESSION_TOKEN_NAME, token);
      } else {
        sessionStorage.removeItem(SESSION_TOKEN_NAME);
      }
    } catch (error) {
      // ignore. We cannot do anything if session storage is disabled.
    }
  }

  private initializeTokenFromSessionStorage () : void {
    try {
      this.updateToken(sessionStorage.getItem(SESSION_TOKEN_NAME));
    } catch (error) {
      this.updateToken(null);
    }
  }

}
