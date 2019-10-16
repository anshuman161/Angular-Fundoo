import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
  listNotes: any;
  noteData: any;
  constructor(private noteService: NotesService ) { }

  ngOnInit() {
    this.getAllNotes();
  }
  getAllNotes() {
    this.noteService.doFetchNotes(this.listNotes)
    .subscribe((response: any) => {
      this.listNotes = response.object;
      console.log(response.object);
    });
}


}
