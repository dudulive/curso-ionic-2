import { NgModule } from '@angular/core';
import {  IonicPageModule } from 'ionic-angular';
import { ListTest } from './list-test';

@NgModule({
  declarations: [
    ListTest,
  ],
  imports: [
    IonicPageModule.forChild(ListTest),
  ],
  exports: [
    ListTest
  ]
})
export class ListTestModule {}
