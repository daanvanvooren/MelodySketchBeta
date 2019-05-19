import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundService {

  constructor() {
    // this.preloadAudio();
  }

  //Public Methods
  public playNote(x: number) {
    this.playAudio(x);
  }

  public changeBpmToMs(bpm: number) {
    return 60 / bpm / 2 * 1000;
  }

  //Private Methods
  private playAudio(x: number) {
    let audio = new Audio();
    audio.src = `../assets/sounds/piano${x + 1}.mp3`;
    audio.load();
    audio.play();
  }

  private preloadAudio() {
    for (let i = 0; i < 23; i++) {
      let audio = new Audio();
      audio.src = `../assets/sounds/piano${i + 1}.mp3`;
      audio.load();
    }
  }
}
