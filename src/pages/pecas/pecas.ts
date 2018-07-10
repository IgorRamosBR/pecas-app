import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.categoriaNome = navParams.get('nomeCategoria');
    this.subcategoriaNome = navParams.get('nomeSubcategoria').nome;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PecasPage');
  }

  voltaCategoria() {
    this.navCtrl.remove(1, 2);
  }
  
  voltaSubcategoria() {
    this.navCtrl.pop();
  }

}
