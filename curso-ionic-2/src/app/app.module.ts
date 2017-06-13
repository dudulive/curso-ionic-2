import { ModalTeste, ModalContentPage } from './../pages/modal-teste/modal-teste';
import { GridTeste } from './../pages/grid-teste/grid-teste';
import { ListTest } from './../pages/list-test/list-test';
import { InputTeste } from './../pages/input-teste/input-teste';
import { IconTeste } from './../pages/icon-teste/icon-teste';
import { CardTeste } from './../pages/card-teste/card-teste';
import { ButtonTest } from './../pages/button-test/button-test';
import { Alerta } from './../pages/alerta/alerta';
import { MenuTeste } from './../pages/menu-teste/menu-teste';
import { GeneratedTeste } from './../pages/generated-teste/generated-teste';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuTeste,
    GeneratedTeste,
    Alerta,
    ButtonTest,
    CardTeste,
    IconTeste,
    InputTeste,
    ListTest,
    GridTeste,
    ModalTeste,
    ModalContentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuTeste,
    GeneratedTeste,
    Alerta,
    ButtonTest,
    CardTeste,
    IconTeste,
    InputTeste,
    ListTest,
    GridTeste,
    ModalTeste,
    ModalContentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
