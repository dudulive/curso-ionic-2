import { NgModule } from '@angular/core';
import {  IonicPageModule } from 'ionic-angular';
import { CardTeste } from './card-teste';

@NgModule({
  declarations: [
    CardTeste,
  ],
  imports: [
    IonicPageModule.forChild(CardTeste),
  ],
  exports: [
    CardTeste
  ]
})
export class CardTesteModule {}
