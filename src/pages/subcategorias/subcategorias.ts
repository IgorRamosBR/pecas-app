import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SubcategoriaProvider } from '../../providers/subcategoria/subcategoria';

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

  categoriaId = 0;
  subcategorias = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private subcategoriaProvider: SubcategoriaProvider) {
    this.categoriaId = navParams.get('idCategoria');
  }

  ionViewDidLoad() {
    this.buscarSubcategorias();
  }

  buscarSubcategorias() {
    this.subcategoriaProvider.buscarTodasSubCategorias()
      .then(subcategorias => this.subcategorias = subcategorias)
  }

}
