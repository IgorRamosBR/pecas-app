import { Injectable } from '@angular/core';

import { MY_CONFIG } from '../../app/app-config';

import 'rxjs/add/operator/toPromise';
import { AuthHttp } from '../../../node_modules/angular2-jwt';

/*
  Generated class for the SubcategoriaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SubcategoriaProvider {

  API_URL = MY_CONFIG.oauthApiEndpoint + '/subcategoria'

  constructor(public http: AuthHttp) {
    console.log('Hello SubcategoriaProvider Provider');
  }

  buscarSubcategoriasPorId(id: number): Promise<any> {
    return this.http.get(`${this.API_URL}/categoria/${id}`)
      .toPromise()
      .then(response => response.json());
  }
}
