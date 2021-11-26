import { Module } from '../core/module'

export class RandomSoundModule extends Module {
   #makePlaylist
   #audio
   constructor() {

   }
   #makePlaylist(sounds, path = './') {
      this.#audio = document.createElement('audio')
      for (let i = 0; i < sounds.length; i++) {
         this.#audio.id = `sound-${i + 1}`
         this.#audio.src = `${path}${sounds[i]}`
         document.body.append(this.#audio)
      }
   }
}