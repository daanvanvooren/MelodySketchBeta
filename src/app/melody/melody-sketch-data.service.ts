import { Injectable } from '@angular/core';
import { Melody } from './melody.model';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MelodySketchDataService {
  //Attributes
  private _refreshNeeded$ = new Subject<void>();


  //Constructor
  constructor(private http: HttpClient) { }

  //Get calls
  get melodies$(): Observable<Melody[]> {
    return this.http.get(`${environment.apiUrl}/melodies/`).pipe(
      map(
        (list: any[]): Melody[] => list.map(Melody.fromJSON)
      )
    );
  }

  get mymelodies$(): Observable<Melody[]> {
    return this.http.get(`${environment.apiUrl}/melodies/mymelodies/`).pipe(
      map(
        (list: any[]): Melody[] => list.map(Melody.fromJSON)
      )
    );
  }

  getMelody$(id): Observable<Melody> {
    return this.http.get(`${environment.apiUrl}/melodies/${id}`).pipe(
      map(
        (mel: any): Melody => Melody.fromJSON(mel)
      )
    );
  }

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  //Post calls
  addNewMelody(melody: Melody) {
    return this.http.post(`${environment.apiUrl}/melodies/`,
      melody.toJSON());
  }

  //Delete calls
  deteleMelody(id: Number): Observable<{}> {
    // this.http.delete(`${environment.apiUrl}/melodies/${id}`, null).subscribe();
    // this.melodies$.subscribe(); 
    return this.http.delete(`${environment.apiUrl}/melodies/${id}`)
      .pipe(
        tap(() => {
          this._refreshNeeded$.next();
        })
      );
  }
}