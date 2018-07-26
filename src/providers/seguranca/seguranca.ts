import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { JwtHelper } from '../../../node_modules/angular2-jwt';

/*
  Generated class for the SegurancaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SegurancaProvider {

  oauthTokenUrl = 'http://localhost:8080/oauth/token';
  //jwtPayload: any;

  constructor(
    private http: Http,
    private jwtHelper: JwtHelper
  ) {
    console.log('Hello SegurancaProvider Provider');
  }

  carregarToken() {
    const token = localStorage.getItem('token');

    if (this.isAccessTokenInvalido) {
      this.buscaToken();
    }
  }

  private buscaToken() {
    const headers = new Headers();
    headers.append('Content-type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic bW9iaWxlLWNsaWVudDp0ZW1wLXNlY3JldA==');

    const body = `grant_type=client_credentials`;

    this.http.post(this.oauthTokenUrl, body, { headers })
    .toPromise()
    .then(response => {
      console.log(response.json().access_token);
      this.armazenarToken(response.json().access_token);
    })
    .catch(response => console.log(response));
  }

  private armazenarToken(token: string) {
    //this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem('token', token);
  } 

  isAccessTokenInvalido() {
    const token = localStorage.getItem('token');

    return !token || this.jwtHelper.isTokenExpired(token);
  }

}
