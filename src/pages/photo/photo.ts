import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {AlertController} from 'ionic-angular'
import {Slides,LoadingController } from 'ionic-angular';
import {Http} from '@angular/http'
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';

/*
  Generated class for the List page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-photo',
  templateUrl: 'photo.html'
})
export class PhotoPage {

  photo_album: string="photo" ;
//  imagePath:string;
//  imagePaths=[];
  photoplace:any;
  imagelist=[];
  imageshow=[];
  i:number;
  //image:string;
  phototime:string;
  photodate:string;
  today:number;
  time:number;
  serverimg;
  fileTransfer:TransferObject;
  count=0;
  constructor(public navCtrl: NavController,
              public alertCtrl:AlertController, 
              private socialSharing: SocialSharing,
              public loadingCtrl: LoadingController,
              private camera: Camera,
              public http:Http,
              private transfer: Transfer, private file: File
              ) {
    // this.storage.get("imagePaths").then(
    //   (value)=>{
    //     this.imageshow=value ?JSON.parse(value) : [];

    // });
    // this.storage.get("imagelists").then(
    //   (value)=>{
    //     this.imagelist=value ?JSON.parse(value) : [];

    
    this.today= Date.now();
    console.log(this.today);
    console.log(Date.now());
  }
  takePhoto(){
    let options:CameraOptions={
      quality:100,
      destinationType:this.camera.DestinationType.FILE_URI,
      //sourceType:this.camera.PictureSourceType.CAMERA,
      saveToPhotoAlbum:true
    };
    this.camera.getPicture(options).then((imagePath)=>{
      this.serverimg=imagePath;
       this.alertCtrl.create({
        enableBackdropDismiss:false,
        message:'memory',
        inputs:[{name:'message',placeholder:'Title'}],
        buttons:[{text:'cancel',role:'cancel' ,handler:()=>{console.log('Cancel clicked');}}
        ,{text:'upload photo',handler:(data)=> {
          this.photoplace=data.message
          this.imagelist.push({
          photo:this.photoplace,
          img:imagePath,
          time:this.today
          });

          let loder = this.loadingCtrl.create({
            content:'add photos..',
            duration: 2000
          });
          loder.present();
     //     this.storage.set("imagelists",JSON.stringify(this.imagelist));
          this.imageshow=[];
        for(this.i=1; 0<=this.imagelist.length-this.i ; this.i++){
          this.imageshow.push(this.imagelist[this.imagelist.length-this.i]);
        }
          //this.imagesave(this.imageshow);
        }}]

      }).present();
      this.upload();
    // this.imageshow.push({
    //   img:imagePath
    // })
      //SocialSharing.share('MP2016',null,imagePath,null);
    },(err)=>{
      console.log("err");
    });
  }

  imagesave(imageshow){
   //this.storage.set("imagePaths",JSON.stringify(this.imagePath));
   //this.storage.set("imagePaths",JSON.stringify(imageshow));
  }
  remove(image){
    this.imageshow.splice(this.imageshow.indexOf(image),1);
    this.imagelist.splice(this.imagelist.indexOf(image),1);
   // this.storage.set("imagePaths",JSON.stringify(this.imageshow));
     // this.storage.set("imagelists",JSON.stringify(this.imagelist));
    }
  share(image){
    this.socialSharing.share(image.photo,null,image.img,null)
  }
  upload(){
    this.serverimg;
    //this.http.get("http://117.17.158.192:8100").subscribe();
    this.fileTransfer = this.transfer.create();
    let options : FileUploadOptions = {
      fileKey: 'file',
      fileName:"capston_test_"+this.count+".jpg",
      headers:{}
    }
    this.fileTransfer.upload(this.serverimg,encodeURI("http://117.17.158.192:8100/test"),options,true)
    .then((data) => {
      this.count++;
    },(err) =>{

    });
  }
}
