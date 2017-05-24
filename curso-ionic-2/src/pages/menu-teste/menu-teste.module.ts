import { Lowercase } from './../../pipes/lowercase';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuTeste } from './menu-teste';

@NgModule({
  declarations: [
    MenuTeste, Lowercase
  ],
  imports: [
    IonicPageModule.forChild(MenuTeste),
  ],
  exports: [
    MenuTeste
  ]
})
export class MenuTesteModule {}
