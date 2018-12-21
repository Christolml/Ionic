import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()

export class NotesServices {

    constructor(public afDB: AngularFireDatabase) {}

    notes = [];

      public getNotes() {
        //   return this.notes;
        return this.afDB.list('notas/');
      }


      public getNote(id) {
/*         return this.notes.filter((note, index) => {
            return note.id == id
        })[0] || {id: null, title: null, description: null}; */
        return this.afDB.object('notas/' + id);
    }

    // este metodo me permite agregar elementos a mi arreglo
    public createNote(note) {
        //this.notes.push(note);
        this.afDB.database.ref('notas/' + note.id).set(note);
    }

    // me permite identificar el id de la nota que se va a editar y le asigno los nuevos datos
    public editNote(note) {
/*         for ( let i = 0; i < this.notes.length; i++) {
            if (this.notes[i].id == note.id) {
                this.notes[i] = note;
            }
        } */
        this.afDB.database.ref('notas/' + note.id).set(note);
    }

    // me elimina una nota
    public deleteNote(note) {
/*         for (let i = 0; i < this.notes.length; i++) {
            if (this.notes[i].id == note.id) {
                this.notes.splice(i,1);
            }
        } */
        this.afDB.database.ref('notas/' + note.id).remove();
    }
}


