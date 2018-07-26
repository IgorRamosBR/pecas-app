import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PecaProvider } from '../../providers/peca/peca';
import { DetalhePecaPage } from '../detalhe-peca/detalhe-peca';
import { ErrorHandlerProvider } from '../../providers/error-handler/error-handler';

/**
 * Generated class for the PecasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pecas',
  templateUrl: 'pecas.html',
})
export class PecasPage {

  categoriaNome = '';
  subcategoriaNome = '';
  subcategoriaId = -1;
  pecas = []

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private pecasProvider: PecaProvider,
              private errorHandlerProvider: ErrorHandlerProvider) {
    this.categoriaNome = navParams.get('nomeCategoria');
    this.subcategoriaNome = navParams.get('nomeSubcategoria');
    this.subcategoriaId = navParams.get('idSubcategoria');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PecasPage');
    this.buscarTodasAsPecas();
  }

  voltaCategoria() {
    this.navCtrl.remove(1, 2);
  }
  
  voltaSubcategoria() {
    this.navCtrl.pop();
  }

  openPeca(peca) {
    this.navCtrl.push(DetalhePecaPage, {
      peca: peca
    })
  }

  buscarTodasAsPecas() {
    this.pecasProvider.buscarPecasPorId(this.subcategoriaId)
      .then(pecas => this.pecas = pecas)
      .catch(error => this.errorHandlerProvider.handle('Falha ao acessar subcategorias. Por favor verifique sua conexão com a Internet.'));
  }

}
