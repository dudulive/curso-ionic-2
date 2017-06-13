import { NgModule } from '@angular/core';
import {  IonicPageModule } from 'ionic-angular';
import { ModalTeste } from './modal-teste';

@NgModule({
  declarations: [
    ModalTeste,
  ],
  imports: [
    IonicPageModule.forChild(ModalTeste),
  ],
  exports: [
    ModalTeste
  ]
})
export class ModalTesteModule {}
