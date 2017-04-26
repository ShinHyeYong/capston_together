import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Page3 } from '../pages/page3/page3';
import { Page4 } from '../pages/page4/page4';
import { Login } from '../pages/login/login';
import { CalendarPage } from '../pages/calendar/calendar';
import { ContactPage } from '../pages/contact/contact';
import { Tutorial } from '../pages/tutorial/tutorial';
import { Myprovider } from '../providers/myprovider';
import { MapPage } from '../pages/map/map';
import { ListPage } from '../pages/list/list';
import { HomePage } from '../pages/home/home';
import { PhotoPage } from '../pages/photo/photo';
// import { Locations } from '../providers/locations';
// import { GoogleMaps } from '../providers/google-maps';
// import { Connectivity } from '../providers/connectivity';
// import { GoogleMapsCluster } from '../providers/google-maps-cluster';
// import { LocationTracker } from '../providers/location-tracker';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SplashPage } from '../pages/splash/splash';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Page3,
    Page4,
    Login,
    CalendarPage,
    ContactPage,
    Tutorial,
    MapPage,
    ListPage,
    HomePage,
    PhotoPage,
    SplashPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),    
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Page3,
    Page4,
    Login,
    CalendarPage,
    ContactPage,
    Tutorial,
    MapPage,
    ListPage,
    HomePage,
    PhotoPage,
    SplashPage
  ],
  providers: [Myprovider,SocialSharing,Camera,Transfer, TransferObject,File]
})
export class AppModule {}
