import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MelodySketchDataService } from '../melody-sketch-data.service';
import { Melody } from '../melody.model';

@Component({
  selector: 'app-melody-detail',
  templateUrl: './melody-detail.component.html',
  styleUrls: ['./melody-detail.component.css']
})
export class MelodyDetailComponent implements OnInit {
  //Attributes
  public melody: Melody;

  //Constructors
  constructor(
    private _route: ActivatedRoute) {
  }

  //Functions
  ngOnInit() {
    this._route.data.subscribe(item => 
      this.melody = item['melody']);
  }
}
