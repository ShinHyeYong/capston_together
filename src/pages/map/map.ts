import { Component, ElementRef, ViewChild } from '@angular/core';
// import { Locations } from '../../providers/locations';
// import { GoogleMaps } from '../../providers/google-maps';
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('pleaseConnect') pleaseConnect: ElementRef;

  constructor(public navCtrl: NavController,  public platform: Platform,) {

  }
}