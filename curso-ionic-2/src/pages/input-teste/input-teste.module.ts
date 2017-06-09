import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InputTeste } from './input-teste';

@NgModule({
  declarations: [
    InputTeste,
  ],
  imports: [
    IonicPageModule.forChild(InputTeste),
  ],
  exports: [
    InputTeste
  ]
})
export class InputTesteModule {}
