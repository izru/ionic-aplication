import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the BotonesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-botones',
  templateUrl: 'botones.html',
})
export class BotonesPage {
  color:string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController) 
    {
      console.log('constructor BotonesPage');
      this.color='rosa';
  }
  cambiarColor(newColor:string){
    this.color=newColor;
  }
  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: '¿quieres cambiar de pagina?',
      message: 'si aceptas te llevamos a la pagina de lisado',
      buttons: [
        {
          text: 'Denegar',
          handler: () => {
            console.log('Denegar clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.navCtrl.push(HomePage);
            console.log('Aceptar clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BotonesPage');
  }

}
