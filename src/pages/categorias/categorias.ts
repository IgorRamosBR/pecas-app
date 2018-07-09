import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaProvider } from '../../providers/categoria/categoria';

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
  items = ['ACABAMENTOS EXTERNOS', 'ACABAMENTOS INTERNOS', 'ACESSÓRIOS', 'ALIMENTAÇÃO DE COMBUSTÍVEL',
  'AMORTECEDORES', 'AR CONDICIONADO','ARREFECIMENTO/RESFR. DO MOTOR', 'BANCOS', 'BORRACHAS (GUARNIÇÕES)',
  'CABOS', 'CALOTAS', 'ELÉTRICO', 'EMBLEMAS', 'LETREIROS E FAIXAS', 'EMBREAGEM E CÂMBIO', 'ESCAPAMENTOS',
  'FERRAMENTAS', 'FILTROS', 'FREIO', 'FRISOS', 'GRAMPOS', 'PRESILHAS', 'BUCHAS ETC', 'HIGIENE E LIMPEZA',
  'IGNIÇÃO', 'ILUMINAÇÃO', 'ITENS DE SEGURANÇA', 'LATARIAS', 'MAÇANETAS', 'FECHADURAS ETC', 'MOTOR',
  'PAINEL', 'PÁRA-CHOQUES', 'PARAFUSOS', 'PORCAS E ARRUELAS', 'PNEUS E RODAS', 'PRODUTOS PARA FUNILARIA',
  'RETROVISORES', 'REVESTIMENTOS', 'SOM', 'SUSPENSÃO', 'TAPETES', 'VIDROS' ];

  categorias = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private categoriaProvider: CategoriaProvider) {
  }

  ionViewDidLoad() {
    this.buscarTodasAsCategorias();
  }

  buscarTodasAsCategorias() {
    this.categoriaProvider.buscarTodasCategorias()
      .then(categorias => this.categorias = categorias);
  }

}
