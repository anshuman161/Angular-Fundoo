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
console.log(notes);

}

}
