import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NavigationTeste } from './navigation-teste';

@NgModule({
  declarations: [
    NavigationTeste,
  ],
  imports: [
    IonicPageModule.forChild(NavigationTeste),
  ],
  exports: [
    NavigationTeste
  ]
})
export class NavigationTesteModule {}
