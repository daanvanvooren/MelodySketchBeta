import { Component, OnInit } from '@angular/core';
import { Melody } from '../melody/melody.model';
import { MelodySketchDataService } from '../melody/melody-sketch-data.service';
import { AuthenticationService } from '../user/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  //Attributes
  public melodies: Melody[];

  //Constructor
  constructor(
    private _melodySketchDataService: MelodySketchDataService,
    private _authenticationService: AuthenticationService) {
  }

  ngOnInit() {

    this._melodySketchDataService.refreshNeeded$.subscribe(
      () => {
        this.getOwnMelodies();
      }
    );

    this.getOwnMelodies();
  }

  getOwnMelodies() {
    this._melodySketchDataService.mymelodies$.subscribe(
      (melodies: Melody[]) => this.melodies = melodies
    );
  }

  deleteMelody(id) {
    this._melodySketchDataService.deteleMelody(id).subscribe();
  }

  getUserEmail() {
    return this._authenticationService.userEmail$;
  }
}
