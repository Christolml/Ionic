import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather:any;

  locationCoordinates:{
    latitude:string,
    longitude:string
  };

  locationCity: {
    country:string,
    city:string
  };

  constructor(
    public navCtrl: NavController,
    private weatherProvider: WeatherProvider,
    private storage:Storage) {

  }


  ionViewWillEnter(){
    this.storage.get('location').then((val) => {
      if(val != null) {
        this.locationCoordinates = JSON.parse(val);
      } else {
        this.locationCoordinates = {
          latitude: '19.2499700',
          longitude: '-103.7271400'
        }
      }

      this.weatherProvider.getWeatherCoordinates(this.locationCoordinates.latitude, this.locationCoordinates.longitude)
      .subscribe(weather => {
         this.weather = weather.current_observation;
        });

    });

  }



}
