import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
popup = false;
  constructor() { }

  ngOnInit() {
  }
onClick() {
  this.popup = !this.popup;
}
closebutton() {
  this.popup = !this.popup;
}
}
