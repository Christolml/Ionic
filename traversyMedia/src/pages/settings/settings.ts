import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  latitude:string;
  longitude:string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private storage:Storage) {
      this.storage.get('location').then((val)=> {
        if(val != null) {
          let location = JSON.parse(val);
          this.latitude = location.latitude;
          this.longitude = location.longitude;
        } else {
          this.latitude = '19.2499700';
          this.longitude = '-103.7271400';
        }
      })
      // this.latitude = '19.2499700';
      // this.longitude = '-103.7271400';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  saveForm() {
    let location = {
      latitude: this.latitude,
      longitude: this.longitude
    }

    this.storage.set('location',JSON.stringify(location));
    this.navCtrl.push(HomePage);
  }

}
