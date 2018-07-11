import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhePecaPage } from './detalhe-peca';

@NgModule({
  declarations: [
    DetalhePecaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhePecaPage),
  ],
})
export class DetalhePecaPageModule {}
