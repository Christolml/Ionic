// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherProvider {
  apiKey = '99dfe35fcb7de1ee';
  url;

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
  }

    getWeatherCoordinates(latitude, longitude) {
    return this.http.get(this.url+'/'+latitude+','+longitude+'.json')
      .map(res => res.json());
  }
// /19.285923,-103.739237.json

    getWeatherCity(country,city) {
      return this.http.get(this.url+'/'+country+'/'+city+'.json')
        .map(res => res.json());
    }

}



