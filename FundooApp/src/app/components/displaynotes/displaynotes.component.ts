import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { MatDialog } from '@angular/material';
import { EditnotesComponent } from '../editnotes/editnotes.component';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
  listNotes: any;
  noteData: any;
  constructor(private noteService: NotesService,
              private dialog: MatDialog ) { }

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
onclickGet(note: any) {
  const dialogRef = this.dialog.open(EditnotesComponent, {
    data:  note
  });
}
}
