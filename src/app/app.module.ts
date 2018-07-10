import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CategoriaProvider } from '../providers/categoria/categoria';
import { CategoriasPage } from '../pages/categorias/categorias';
import { HttpModule } from '@angular/http';
import { SubcategoriasPage } from '../pages/subcategorias/subcategorias';
import { SubcategoriaProvider } from '../providers/subcategoria/subcategoria';
import { PecasPage } from '../pages/pecas/pecas';
import { PecaProvider } from '../providers/peca/peca';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CategoriasPage,
    SubcategoriasPage,
    PecasPage
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
    PecasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoriaProvider,
    SubcategoriaProvider,
    PecaProvider
  ]
})
export class AppModule {}
