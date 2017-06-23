import { GridTeste } from './../grid-teste/grid-teste';
import { ListTest } from './../list-test/list-test';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabTeste page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tab-teste',
  templateUrl: 'tab-teste.html',
})
export class TabTeste {

  homePagest: any = ListTest;
  contatosPage: any = GridTeste;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabTeste');
  }

}
