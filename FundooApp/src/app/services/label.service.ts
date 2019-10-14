import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LabelService {

  constructor(private http: HttpClient) { }

  retrieveAllLabel() {
      console.log(localStorage.getItem('token'));
      return this.http.get('http://localhost:8080/labels/fetchalllabel',
        { headers: new HttpHeaders().set('token', localStorage.getItem('token')) });
      console.log('after return');
  }

  addlabeltonote(noteId: any, labelId: any) {
     // tslint:disable-next-line:max-line-length
     return this.http.put('http://localhost:8080/labels/addNotesLables?', null, { headers: new HttpHeaders().set('token', localStorage.getItem('token')).set('noteId', noteId).set('labelId', labelId) });
    }
}
