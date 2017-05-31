import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Alerta } from './alerta';

@NgModule({
  declarations: [
    Alerta,
  ],
  imports: [
    IonicPageModule.forChild(Alerta),
  ],
  exports: [
    Alerta
  ]
})
export class AlertaModule {}
