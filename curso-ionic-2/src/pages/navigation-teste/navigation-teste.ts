import { CardTeste } from './../card-teste/card-teste';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NavigationTeste page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-navigation-teste',
  templateUrl: 'navigation-teste.html',
})
export class NavigationTeste {
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  openPage2() {
      this.navCtrl.push(CardTeste);
  }
}
