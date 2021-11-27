import { Module } from '../core/module'
import { random } from '../utils'
import explosion from '../assets/sounds/explosion.mp3'
import gong from '../assets/sounds/sm-music-gong-1.mp3'
import drumsticks from '../assets/sounds/drumsticks.mp3'
import whoosh from '../assets/sounds/whoosh.mp3'
import drums from '../assets/sounds/sm-music-drums-2.mp3'

export class RandomSoundModule extends Module {
   #sounds
   constructor(type) {
      super(type, 'Воспроизвести случайный звук')
      this.#sounds = [explosion, gong, drumsticks, whoosh, drums];
   };
   trigger() {
      const index = random(0, this.#sounds.length - 1)
      const audio = new Audio(this.#sounds[index]);
      audio.play()
   }
}