import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotesService } from 'src/app/services/notes.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-editnotes',
  templateUrl: './editnotes.component.html',
  styleUrls: ['./editnotes.component.scss']
})
export class EditnotesComponent implements OnInit {
  note;
  noteForm: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private noteService: NotesService,
              private dialog: MatDialogRef<EditnotesComponent>) {
    this.note = this.data;
  }


  ngOnInit() {
    this.noteForm = new FormGroup({
      title: new FormControl(this.data.tittle, [Validators.required]),

      description: new FormControl(this.data.description, [Validators.required])
    });
  }
  ngOnclose() {
    this.dialog.close();
    console.log(this.note.tittle);
    this.noteService.editNotes(this.note)
      .subscribe(() => {
        console.log(this.noteForm.value);
      },
        error => {
          console.log('something is wrong');
        }
      );

  }
}
