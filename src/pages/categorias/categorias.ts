import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaProvider } from '../../providers/categoria/categoria';
import { SubcategoriasPage } from '../subcategorias/subcategorias';

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  categorias = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private categoriaProvider: CategoriaProvider) {
  }

  ionViewDidLoad() {
    this.buscarTodasAsCategorias();
  }

  openPage(id, nome) {
    console.log('Categoria - nome' + nome);
    this.navCtrl.push(SubcategoriasPage, {
      idCategoria: id,
      nomeCategoria: nome
    });
  }

  buscarTodasAsCategorias() {
    this.categoriaProvider.buscarTodasCategorias()
      .then(categorias => this.categorias = categorias);
  }

}
