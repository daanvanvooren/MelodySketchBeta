import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Melody } from '../melody.model';
import { MelodySketchDataService } from '../melody-sketch-data.service';
import { Note } from '../note.model';
import { User } from '../user.model';
import { AuthenticationService } from 'src/app/user/authentication.service';
declare var $ : any;

@Component({
  selector: 'app-add-melody',
  templateUrl: './add-melody.component.html',
  styleUrls: ['./add-melody.component.css']
})
export class AddMelodyComponent implements OnInit {
  // @Output() public newMelody = new EventEmitter<Melody>();
  public melody: FormGroup; //Input from db in needed
  public _notes = new Array<Note>(); //Notes from child

  constructor(
    private _melodySketchDataService: MelodySketchDataService,
    private _authenticationService: AuthenticationService
  ) {

  }

  ngOnInit() {
    this.melody = new FormGroup({
      bpm: new FormControl('',  [Validators.required]),
      name: new FormControl('', [Validators.required]),
      description: new FormControl('',  [Validators.required])
    })


    //console.log(this._authenticationService.userEmail$)

    // document.getElementById("bpmInput").addEventListener('change', function () {
    //   console.log("test");
    // });
  }

  onSubmit() {
    this._melodySketchDataService
      .addNewMelody(new Melody(
        new User(this._authenticationService.userEmail$, "", ""),
        new Date(),
        this._notes,
        this.melody.value.bpm,
        this.melody.value.name,
        this.melody.value.description
      ))
      .subscribe();
    $('#submittedModal').modal('show');
  }

  //Methods
  public getNotes(notes: Array<Note>) { //Input from pianoRoll
    this._notes = notes;
  }
}
