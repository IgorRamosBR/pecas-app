import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


import { MY_CONFIG } from '../../app/app-config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PecaProvider {

  private API_URL = MY_CONFIG.apiEndpoint + '/pecas';

  constructor(public http: Http) {
    console.log('Hello PecaProvider Provider');
  }

  buscarTodasPecas(): Promise<any> {
    return this.http.get(this.API_URL)
      .toPromise()
      .then(response => response.json())
  }

}
