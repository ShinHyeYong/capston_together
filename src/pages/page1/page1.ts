import { Component } from '@angular/core';
import { MapPage } from '../map/map';
import { ListPage } from '../list/list';
import { HomePage } from '../home/home';
import { PhotoPage } from '../photo/photo';
import { Page3 } from '../page3/page3';


declare var google;

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  tab1Root: any = HomePage;
  tab2Root: any = PhotoPage;
  tab3Root: any = MapPage;
  tab4Root: any = Page3;
  constructor(){

  }

  // start(){
  //   this.locationTracker.startTracking();
  // }
  //
  // stop(){
  //   this.locationTracker.stopTracking();
  // }
}
