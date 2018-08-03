import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the FiltroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filtro',
  templateUrl: 'filtro.html',
})
export class FiltroPage {

  marca:any = '';
  preco: any = {lower: 0, upper: 0};
  montadora = '';
  modelo = '';
  loja = '';

  pecas = [];
  montadoras = [];
  marcas = [];
  lojas = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public events: Events) {
    this.pecas = navParams.get('pecas');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FiltroPage');
    this.carregarMarcas();
    this.carregarPrecos();
    this.carregarLojas();
  }

  ionViewWillLeave() {
    console.log('ionViewDidLeave FiltroPage ' + 'testando');
    this.events.publish('filtro-pecas', this.pecas);
  }

  carregarMarcas() {
    this.marcas = this.pecas.map(x => x.marca);
    console.log(this.marcas);
  }
  
  carregarPrecos() {
    this.preco.upper = Math.max.apply(Math, this.pecas.map(x => x.preco));
    this.preco.lower = Math.min.apply(Math, this.pecas.map(x => x.preco));
    console.log(this.preco); 
  }

  carregarLojas() {
    this.lojas = Array.from(new Set(this.pecas.map(x => x.loja.nome)));
    console.log(this.lojas);
  }

  filtraMarca() {
    this.pecas = Array.from(new Set(this.pecas.map(x => x.peca.marca == this.marca)));
  }

}

