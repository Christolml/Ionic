import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotesServices } from '../../services/notes.services';



@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  note:any = {
    id: null,
    title: null,
    description: null
  };

  // este id es el que me envia la pagina de home cuando se selecciona un objeto para ver los detalles
  // en el constructor se le asigna el id enviado de home a esta variable
  id = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public notesService: NotesServices) {
    // aqui capturo el id que me enviaron de la pagina home
    // cuando creo una nueva nota mando un id = 0 para que me abra la pagina de detail.html sin ningun dato
    // para que ingrese nuevos datos de una nueva nota sin hacer referencia a una nota existente
    // si el id es cero estamos creando una nueva nota
    this.id = navParams.get('id');
    if (this.id != 0) {
      notesService.getNote(this.id)
        .valueChanges().subscribe( note => {
            this.note = note;
        });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  addNote() {
    // cuando el id != 0 estamos editando una nota existente
    if (this.id != 0) {
      this.notesService.editNote(this.note)
      alert('Nota editada con éxito!');
    } else {
      this.note.id = Date.now();
      this.notesService.createNote(this.note)
      alert('Nota creada con éxito!');
    }

    // navCtrl.pop() me redirecciona a la pagina anterior
    this.navCtrl.pop();
  }

  deleteNote() {
    this.notesService.deleteNote(this.note);
    alert('Nota eliminada con éxito!');
    this.navCtrl.pop();
  }




}
