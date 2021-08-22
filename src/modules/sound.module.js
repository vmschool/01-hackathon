import { Module } from "../core/module";
import { random } from "../utils";
import { sounds } from '../db/sounds'

export class SoundModule extends Module {
  // getSoundSrc() {
  //   const soundName = sounds[random(0, sounds.length - 1)]
  //   return `../assets/sounds/${soundName}.mp3`
  // }

createAudio() {
    const audio = document.createElement('audio')
    // audio.src = this.getSoundSrc()
    audio.setAttribute('autoplay', '')
    audio.textContent = 'Тег audio не поддерживается вашим браузером.'
    return audio
  }

}
