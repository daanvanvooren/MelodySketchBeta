import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Melody } from '../melody.model';
import { MelodySketchDataService } from '../melody-sketch-data.service';
import { AuthenticationService } from 'src/app/user/authentication.service';

@Component({
  selector: 'app-melody-profile',
  templateUrl: './melody-profile.component.html',
  styleUrls: ['./melody-profile.component.css']
})
export class MelodyProfileComponent implements OnInit {
  //Attributes
  private _fetchMelodies$: Observable<Melody[]>
    = this._melodySketchDataService.mymelodies$;

  //Constructor
  constructor(
    private _melodySketchDataService: MelodySketchDataService,
    private _authenticationService: AuthenticationService) {
  }

  ngOnInit() {
  }

  //Methods
  get mymelodies$(): Observable<Melody[]> {
    return this._fetchMelodies$;
  }

  getUserEmail(){
    return this._authenticationService.userEmail$;
  }
}
