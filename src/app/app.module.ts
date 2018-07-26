import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { JwtHelper, AuthHttp, AuthConfig } from 'angular2-jwt'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CategoriaProvider } from '../providers/categoria/categoria';
import { CategoriasPage } from '../pages/categorias/categorias';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { SubcategoriasPage } from '../pages/subcategorias/subcategorias';
import { SubcategoriaProvider } from '../providers/subcategoria/subcategoria';
import { PecasPage } from '../pages/pecas/pecas';
import { PecaProvider } from '../providers/peca/peca';
import { DetalhePecaPage } from '../pages/detalhe-peca/detalhe-peca';
import { SegurancaProvider } from '../providers/seguranca/seguranca';
import { ErrorHandlerProvider } from '../providers/error-handler/error-handler';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CategoriasPage,
    SubcategoriasPage,
    PecasPage,
    DetalhePecaPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CategoriasPage,
    SubcategoriasPage,
    PecasPage,
    DetalhePecaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JwtHelper,
    CategoriaProvider,
    SubcategoriaProvider,
    PecaProvider,
    SegurancaProvider,
    {provide: AuthHttp, useFactory: authHttpServiceFactory, deps: [Http, RequestOptions]},
    ErrorHandlerProvider
  ]
})
export class AppModule {}
