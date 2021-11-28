import { Module } from '../core/module'
import { random } from '../utils'

export class RandomSoundModule extends Module {
   #sounds
   constructor(type, text) {
      super(type, text)
      this.#sounds = ['https://cdn-app.sberdevices.ru/dev-guide/1.215.0/docs/db6545d4a0dd5d19566a0d0eda5c1fa3/sm-sounds-things-explosion-1.mp3',
         'https://cdn-app.sberdevices.ru/dev-guide/1.215.0/docs/4dea618cf750607ce2fb6dd6d4777186/sm-music-gong-1.mp3',
         'https://cdn-app.sberdevices.ru/dev-guide/1.215.0/docs/745a7efb480b04581a95d6e2aa73bf3b/sm-sounds-game-win-3.mp3',
         'https://cdn-app.sberdevices.ru/dev-guide/1.215.0/docs/7fdee27c9ea998a0e0aebaa1975aa4e2/sm-sounds-game-8-bit-phone-1.mp3',
         'https://cdn-app.sberdevices.ru/dev-guide/1.215.0/docs/0d1dd279a8fc4dcf4cb1afb28119f8f7/sm-music-drums-2.mp3']
   };
   trigger() {
      const index = random(0, this.#sounds.length - 1)
      const audio = new Audio(this.#sounds[index])
      audio.play()
   }
}
