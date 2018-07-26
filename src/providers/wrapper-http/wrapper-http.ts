
import { Injectable } from '@angular/core';
import { AuthHttp, AuthConfig } from '../../../node_modules/angular2-jwt';
import { SegurancaProvider } from '../seguranca/seguranca';
import { Http, RequestOptions, RequestOptionsArgs, Response } from '../../../node_modules/@angular/http';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the WrapperHttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class WrapperHttpProvider extends AuthHttp{

  constructor(
    private auth: SegurancaProvider,
    options: AuthConfig,
    http: Http, defOpts?: RequestOptions
  ) {
      super(options, http, defOpts);
  }
  public delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.fazerRequisicao(() => super.delete(url, options));
  }

  public patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.fazerRequisicao(() => super.patch(url, options));
  }

  public head(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.fazerRequisicao(() => super.head(url, options));
  }

  public options(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.fazerRequisicao(() => super.options(url, options));
  }

  public get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.fazerRequisicao(() => super.get(url, options));
  }

  public post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.fazerRequisicao(() => super.post(url, body, options));
  }

  public put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.fazerRequisicao(() => super.put(url, body, options));
  }

  private fazerRequisicao(fn: Function): Observable<Response> {
    if (this.auth.isAccessTokenInvalido()) {
      console.log('Requisição HTTP com access token inválido. Obtendo novo token...');

      const chamadaNovoAccessToken = this.auth.buscaToken()
        .then(() => {
            return fn().toPromise();
          });

      return Observable.fromPromise(chamadaNovoAccessToken);
    } else {
      return fn();
    }
  }
}
