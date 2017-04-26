import { Component } from '@angular/core';
import { NavController, NavParams, AlertController  } from 'ionic-angular';
import {Myprovider} from '../../providers/myprovider';
import { CalendarPage } from '../calendar/calendar';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
// items = [
//     '캘린더',
//     '전화번호부',
//     '날씨'
//   ];
constructor(public navCtrl: NavController){}

  openCalendar(){
    this.navCtrl.push(CalendarPage);
  }

  itemSelected(item: string) {

  }
}
