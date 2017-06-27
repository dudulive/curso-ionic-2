import { NgModule } from '@angular/core';
import {  IonicPageModule } from 'ionic-angular';
import { ToastTeste } from './toast-teste';

@NgModule({
  declarations: [
    ToastTeste,
  ],
  imports: [
    IonicPageModule.forChild(ToastTeste),
  ],
  exports: [
    ToastTeste
  ]
})
export class ToastTesteModule {}
