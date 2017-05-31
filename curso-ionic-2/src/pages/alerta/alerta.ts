import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the Alerta page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-alerta',
  templateUrl: 'alerta.html',
})
export class Alerta {

  user: string = 'none';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController ) {
  }

  showAlert() {
      let alert = this.alertCtrl.create({
        title: 'Alert test!',
        message: "Digite seu nome",
        inputs: [
          {
            name: 'nome',
            placeholder: 'Seu nome'
          },
        ],
        buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: data => {
            this.user = data.nome;
          }
        }
      ]
      });
      alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Alerta');
  }

}
