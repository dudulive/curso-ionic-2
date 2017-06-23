import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabTeste } from './tab-teste';

@NgModule({
  declarations: [
    TabTeste,
  ],
  imports: [
    IonicPageModule.forChild(TabTeste),
  ],
  exports: [
    TabTeste
  ]
})
export class TabTesteModule {}
