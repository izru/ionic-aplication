import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { BotonesPage } from '../botones/botones';

/**
 * Generated class for the PophoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pophover',
  templateUrl: 'pophover.html',
  template: `
    <ion-list>
    <button ion-item  (click)="cambiarColor('rosa')">rosa</button>
  
  <button ion-item   (click)="cambiarColor('primary')">azul</button>
  <button ion-item  (click)="cambiarColor('dark')">Negro</button>
    </ion-list>`
})
export class PopoverPage {
  constructor(public viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss();
  }
}
