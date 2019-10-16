import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
popup = false;

constructor(private noteService: NotesService) { }
noteData: any;
createnotesform: FormGroup;
ngOnInit() {
  this.createnotesform = new FormGroup({
    tittle: new FormControl(''),
    description: new FormControl('')
  });
}
onClick() {
  this.popup = !this.popup;
}
onSubmit() {
  console.log(this.createnotesform.value);
  this.noteService.createNotes(this.createnotesform.value)
   .subscribe((response: any) => {
   this.noteData = response.object ;
   console.log(response.object);
       });
  this.popup = !this.popup;
}

}



