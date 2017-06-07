import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IconTeste } from './icon-teste';

@NgModule({
  declarations: [
    IconTeste,
  ],
  imports: [
    IonicPageModule.forChild(IconTeste),
  ],
  exports: [
    IconTeste
  ]
})
export class IconTesteModule {}
