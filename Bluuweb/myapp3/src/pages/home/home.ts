import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
// import {MasinfoPage} from '../masinfo/masinfo';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {




  constructor(public navCtrl: NavController, public alerta: AlertController ) {

  }

  alertaBasica(){
    let miAlerta = this.alerta.create({
      title: 'Titulo de la alerta',
      message: 'Mensaje de nuestro alert',
      buttons:['Ok']
    });
    miAlerta.present();
  }

  alertaBasica2(){
    let miAlerta2 = this.alerta.create({
      title: 'Titulo de la alerta',
      message: 'Mensaje de nuestro alert',
      inputs: [
        {
          name: 'Nombre',
          placeholder: 'Nombre'
        }
      ],
      buttons:[
        {
          text: 'Cancel',
          handler: data => {
            // dentro de este handler podre hacer una funcion para manejar los datos dependiendo del boton que se apreto
            alert('Apretaste el boton cancel');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    miAlerta2.present();
  }

/*   otraPagina() {
    this.navCtrl.push(MasinfoPage);
  } */

}
