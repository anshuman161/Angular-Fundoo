import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient) { }
doFetchNotes(notes: any) {
  return this.http.get('http://localhost:8080/notes/fetchallnotes',
  { headers: new HttpHeaders().set('token', localStorage.getItem('token')) });
}
createNotes(notes: any) {
  return this.http.post('http://localhost:8080/notes/creation', notes ,
  { headers: new HttpHeaders().set('token', localStorage.getItem('token')) });
}
editNotes(notes: any) {
  return this.http.post('http://localhost:8080/notes/updation', notes ,
  { headers: new HttpHeaders().set('token', localStorage.getItem('token')) });
}

deleteNotes(noteId: any) {
  console.log(noteId.noteId);
  return this.http.delete('http://localhost:8080/notes/deletion?noteId=' + noteId,
  { headers: new HttpHeaders().set('token', localStorage.getItem('token')) });
}

}
