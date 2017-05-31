import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ButtonTest } from './button-test';

@NgModule({
  declarations: [
    ButtonTest,
  ],
  imports: [
    IonicPageModule.forChild(ButtonTest),
  ],
  exports: [
    ButtonTest
  ]
})
export class ButtonTestModule {}
