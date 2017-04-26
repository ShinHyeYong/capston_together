import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page1 } from '../page1/page1'

@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html'
  })
export class SplashPage {
    constructor(public navCtrl: NavController) {

    }
    goPage1(){ this.navCtrl.push(Page1)}
}
