import { NgModule } from '@angular/core';
import {  IonicPageModule } from 'ionic-angular';
import { ToolbarTeste } from './toolbar-teste';

@NgModule({
  declarations: [
    ToolbarTeste,
  ],
  imports: [
    IonicPageModule.forChild(ToolbarTeste),
  ],
  exports: [
    ToolbarTeste
  ]
})
export class ToolbarTesteModule {}
