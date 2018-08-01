import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SubcategoriaProvider } from '../../providers/subcategoria/subcategoria';
import { PecasPage } from '../pecas/pecas';
import { ErrorHandlerProvider } from '../../providers/error-handler/error-handler';

/**
 * Generated class for the SubcategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subcategorias',
  templateUrl: 'subcategorias.html',
})
export class SubcategoriasPage {

  categoria: any;
  subcategorias = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private subcategoriaProvider: SubcategoriaProvider,
              private errorHandlerProvider: ErrorHandlerProvider) {
    this.categoria = navParams.get('categoria');
  }

  ionViewDidLoad() {
    this.buscarSubcategorias();
  }

  openPage(subcategoria) {
    this.navCtrl.push(PecasPage, {
      subcategoria: subcategoria
    });
  }

  buscarSubcategorias() {
    this.subcategoriaProvider.buscarSubcategoriasPorId(this.categoria.id)
      .then(subcategorias => this.subcategorias = subcategorias) 
      .catch(error => this.errorHandlerProvider.handle('Falha ao acessar subcategorias. Por favor verifique sua conexão com a Internet.'));
  }

}
