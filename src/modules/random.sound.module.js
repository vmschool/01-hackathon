import { Module } from '../core/module'
import * as utils from '../utils'
import explosion from '../assets/sounds/explosion.mp3'
import gong from '../assets/sounds/sm-music-gong-1.mp3'
import drumsticks from '../assets/sounds/drumsticks.mp3'
import whoosh from '../assets/sounds/whoosh.mp3'
import drums from '../assets/sounds/sm-music-drums-2.mp3'

export class RandomSoundModule extends Module {
   #sounds
   constructor() {
      super('random-audio', 'Random audio module')
      this.#sounds = [explosion, gong, drumsticks, whoosh, drums];
   };
   trigger() {
      const index = utils.random(1, this.#sounds.length)
      const audio = new Audio(this.#sounds[index]);
      audio.play()
   }
}