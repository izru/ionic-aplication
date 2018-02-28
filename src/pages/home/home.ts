import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import {PopoverPage} from '../pophover/pophover';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  color:string;

  constructor(
    public navCtrl: NavController,
    public popoverCtrl: PopoverController

    
  ) {
    this.color='rosa';
  }
  cambiarColor(newColor:string){
    console.log('cambiocolor');
    this.color=newColor;
  }
  
    presentPopover(myEvent) {
      let popover = this.popoverCtrl.create(PopoverPage);
      popover.present({
        ev: myEvent
      });
    }

  

}
