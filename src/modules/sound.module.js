import { Module } from '../core/module';
import { sounds } from '../db/sounds';
import { random } from '../utils'

export class SoundModule extends Module {
  getSoundSrc() {
    const soundName = sounds[random(0, sounds.length - 1)]
    return `../assets/sounds/${soundName}.mp3`
  }

  /* createAudio() {
    const audio = document.createElement('audio') 
    audio.src = this.getSoundSrc()
    audio.setAttribute('autoplay', '')
    audio.textContent = 'Тег audio не поддерживается вашим браузером.'
    return audio
  }

  trigger() {
    if (document.querySelector('audio')) {
      document.querySelector('audio').remove()
    }
    document.body.append(this.createAudio())
  } */

  createSound() {
    const audio = new Audio(this.getSoundSrc()) 
    console.log(this.getSoundSrc());
    setTimeout(() => audio.play(), 500)
    //audio.play()
  }
  
  trigger() {
      this.createSound()
  }
} 

