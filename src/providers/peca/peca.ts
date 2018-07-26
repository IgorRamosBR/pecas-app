import { Injectable } from '@angular/core';


import { MY_CONFIG } from '../../app/app-config';

import 'rxjs/add/operator/toPromise';
import { AuthHttp } from '../../../node_modules/angular2-jwt';

@Injectable()
export class PecaProvider {

  private API_URL = MY_CONFIG.oauthApiEndpoint + '/peca';

  constructor(public http: AuthHttp) {
    console.log('Hello PecaProvider Provider');
  }

  buscarPecasPorId(id: number): Promise<any> {
    return this.http.get(`${this.API_URL}/subcategoria/${id}`)
      .toPromise()
      .then(response => response.json())
  }

}
