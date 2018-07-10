import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { MY_CONFIG } from '../../app/app-config';

import 'rxjs/add/operator/toPromise';

/*
  Generated class for the CategoriaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoriaProvider {

  private API_URL = MY_CONFIG.apiEndpoint + '/categorias';

  constructor(public http: Http) {
    console.log('Hello CategoriaProvider Provider');
  }

  buscarTodasCategorias(): Promise<any> {
    return this.http.get(this.API_URL)
      .toPromise()
      .then(response => response.json());
  }

}
