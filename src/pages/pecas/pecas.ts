import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

import { PecaProvider } from '../../providers/peca/peca';
import { DetalhePecaPage } from '../detalhe-peca/detalhe-peca';
import { ErrorHandlerProvider } from '../../providers/error-handler/error-handler';
import { FiltroPage } from '../filtro/filtro';

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

  subcategoria: any;
  pecas = []

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public events: Events,
              private pecasProvider: PecaProvider,
              private errorHandlerProvider: ErrorHandlerProvider) {
    this.subcategoria = navParams.get('subcategoria');
  }

  ionViewDidLoad() {
    this.buscarTodasAsPecas();
    this.events.subscribe('filtro-pecas', x => {
      this.pecas = x;
      console.log("Evento Filtro de peças.")
    });
    
  }

  openPeca(peca) {
    this.navCtrl.push(DetalhePecaPage, {
      peca: peca
    })
  }

  openFilter() {
    var pecasReceived = JSON.parse(localStorage.getItem("pecas"));
    this.navCtrl.push(FiltroPage, {
      pecas: pecasReceived
    })
  }

  buscarTodasAsPecas() {
    this.pecasProvider.buscarPecasPorId(this.subcategoria.id)
      .then(pecas => {
        this.pecas = pecas;
        localStorage.setItem("pecas", JSON.stringify(pecas)); 
        console.log("Buscando peças....");
      })
      .catch(error => this.errorHandlerProvider.handle('Falha ao acessar subcategorias. Por favor verifique sua conexão com a Internet.'));
  }

}