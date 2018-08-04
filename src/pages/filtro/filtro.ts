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
  max = 0;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public events: Events) {
    this.pecas = navParams.get('pecas');
    this.carregarMarcas();
    this.carregarPrecos();
    this.carregarLojas();
  }

  ionViewDidLoad() {
  }

  ionViewWillLeave() {
    if(!this.filtroIsNull())
      this.events.publish('filtro-pecas', this.filtrar());
  }

  carregarMarcas() {
    this.marcas = this.pecas.map(x => x.marca).sort();
  }
  
  carregarPrecos() {
    this.preco.upper = Math.max.apply(Math, this.pecas.map(x => x.preco));
    this.max = this.preco.upper;
    //this.preco.lower = Math.min.apply(Math, this.pecas.map(x => x.preco));
   
  }

  carregarLojas() {
    this.lojas = Array.from(new Set(this.pecas.map(x => x.loja.nome).sort()));
  }

  filtrar() {
    let pecasfiltradas = this.pecas.filter(x => {
      let resultado = true;
      if(this.marca != '' && x.marca != this.marca)
        resultado = false;
      if(this.loja != '' && x.loja.nome != this.loja)
        resultado = false;
      if(x.preco < this.preco.lower || x.preco > this.preco.upper) 
        resultado = false;
      return resultado;
    });
    return pecasfiltradas;
  }

  filtroIsNull() {
    if (this.loja == '' && this.marca == '' && this.preco.lower == 0 && this.preco.upper == this.max)
      return true;
  }
}

