import { ConnectionService } from './../../providers/connection-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GeneratedTeste page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-generated-teste',
  templateUrl: 'generated-teste.html',
  providers: [ConnectionService]
})
export class GeneratedTeste {

  constructor(public navCtrl: NavController, public navParams: NavParams, private connectionService : ConnectionService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneratedTeste');
  }

  buscarCep() : void{
      this.connectionService.getCep('74476050').then((res) => {
          console.log(res);
      }).catch((err) => {
           console.log(err);
      });
  }
}
