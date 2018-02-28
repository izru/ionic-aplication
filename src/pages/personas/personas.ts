import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MOCKS } from './mocks';

/**
 * Generated class for the PersonasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personas',
  templateUrl: 'personas.html',
})
export class PersonasPage {
  personas:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.personas =JSON.parse(MOCKS.data);
    console.log('personas cargadas %o', this.personas);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonasPage');
  }

}
