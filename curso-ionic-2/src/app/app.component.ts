import { ToastTeste } from './../pages/toast-teste/toast-teste';
import { TabTeste } from './../pages/tab-teste/tab-teste';
import { NavigationTeste } from './../pages/navigation-teste/navigation-teste';
import { ModalTeste } from './../pages/modal-teste/modal-teste';
import { GridTeste } from './../pages/grid-teste/grid-teste';
import { ListTest } from './../pages/list-test/list-test';
import { InputTeste } from './../pages/input-teste/input-teste';
import { IconTeste } from './../pages/icon-teste/icon-teste';
import { CardTeste } from './../pages/card-teste/card-teste';
import { ButtonTest } from './../pages/button-test/button-test';
import { Alerta } from './../pages/alerta/alerta';
import { GeneratedTeste } from './../pages/generated-teste/generated-teste';
import { MenuTeste } from './../pages/menu-teste/menu-teste';
import { HomePage } from './../pages/home/home';

import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  home: any = HomePage;
  test: any = MenuTeste;
  generated: any = GeneratedTeste;
  alert: any = Alerta;
  button: any = ButtonTest;
  card: any = CardTeste;
  icon: any = IconTeste;
  input: any = InputTeste;
  list: any = ListTest;
  grid: any = GridTeste;
  modal:any = ModalTeste;
  navigation:any = NavigationTeste;
  tab:any = TabTeste;
  toast:any = ToastTeste;

  rootPage: any = this.home;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    this.rootPage = page;
  }
}

