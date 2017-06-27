import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the ToastTeste page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-toast-teste',
  templateUrl: 'toast-teste.html',
})
export class ToastTeste {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

 showToast(){
    let toast = this.toastCtrl.create({
      message: 'Olá mundo',
      duration: 3000
    });
    toast.present();
 }

}
