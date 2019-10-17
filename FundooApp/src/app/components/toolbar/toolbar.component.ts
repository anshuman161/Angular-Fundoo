import { Component, OnInit, Input } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() note: any;
  listNotes: any;
  constructor(private noteService: NotesService) { }

  ngOnInit() {
  }
  onclickdelete() {
   this.noteService.deleteNotes(this.note.noteId)
     .subscribe(
      (response: any) => {
        console.log(response.message);
    },
    error => {
      console.log(error);
     });
  }
}
