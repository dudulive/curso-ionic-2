import { NgModule } from '@angular/core';
import {  IonicPageModule } from 'ionic-angular';
import { GridTeste } from './grid-teste';

@NgModule({
  declarations: [
    GridTeste,
  ],
  imports: [
    IonicPageModule.forChild(GridTeste),
  ],
  exports: [
    GridTeste
  ]
})
export class GridTesteModule {}
