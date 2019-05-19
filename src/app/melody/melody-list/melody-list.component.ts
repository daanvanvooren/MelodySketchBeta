import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Melody } from '../melody.model';
import { MelodySketchDataService } from '../melody-sketch-data.service';

@Component({
  selector: 'app-melody-list',
  templateUrl: './melody-list.component.html',
  styleUrls: ['./melody-list.component.css']
})
export class MelodyListComponent implements OnInit {
  //Attributes
  // private _fetchMelodies$: Observable<Melody[]>
  //   = this._melodySketchDataService.melodies$;

  public melodies: Melody[];

  //Constructor
  constructor(private _melodySketchDataService: MelodySketchDataService) {
  }

  ngOnInit() {

    this._melodySketchDataService.refreshNeeded$.subscribe(
      () => {
        this.getAllMelodies();
      }
    );

    this.getAllMelodies();
  }

  getAllMelodies() {
    this._melodySketchDataService.melodies$.subscribe(
      (melodies: Melody[]) => this.melodies = melodies
    );
  }

  //Methods
  // get melodies$(): Observable<Melody[]> {
  //   return this._fetchMelodies$;
  // }
}
