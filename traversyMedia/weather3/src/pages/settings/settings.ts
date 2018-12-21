import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  appType = 'Coordinates';

  latitude:string;
  longitude:string;
  country:string;
  city:string;


  forms: any = {
    'Coordinates': [
      {
        name: 'latitude',
        obj: this.latitude
      },
      {
        name: 'longitude',
        obj: this.longitude
      }
    ],
    'City': [
      {
        name: 'country',
        obj: this.country
      },
      {
        name: 'city',
        obt: this.city
      }

    ]
  };


  getLocations(type: any) {
    return this.forms[type];
  }

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
  }

  saveForm() {
    let location = {
      latitude: this.latitude,
      longitude: this.longitude
    }

    console.log(location);

    // this.storage.set('location',JSON.stringify(location));
    // this.navCtrl.push(HomePage);
  }

}
