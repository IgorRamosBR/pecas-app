import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalhePecaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-peca',
  templateUrl: 'detalhe-peca.html',
})
export class DetalhePecaPage {

  peca = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.peca = navParams.get("peca");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhePecaPage');
  }

}
