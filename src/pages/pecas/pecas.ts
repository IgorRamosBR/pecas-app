import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PecaProvider } from '../../providers/peca/peca';
import { DetalhePecaPage } from '../detalhe-peca/detalhe-peca';

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
  pecas = []

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private pecasProvider: PecaProvider) {
    this.categoriaNome = navParams.get('nomeCategoria');
    this.subcategoriaNome = navParams.get('nomeSubcategoria').nome;
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
    this.pecasProvider.buscarTodasPecas()
      .then(pecas => this.pecas = pecas);
  }

}
