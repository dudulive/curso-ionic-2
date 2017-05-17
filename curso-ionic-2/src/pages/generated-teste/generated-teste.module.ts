import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeneratedTeste } from './generated-teste';

@NgModule({
  declarations: [
    GeneratedTeste,
  ],
  imports: [
    IonicPageModule.forChild(GeneratedTeste),
  ],
  exports: [
    GeneratedTeste
  ]
})
export class GeneratedTesteModule {}
