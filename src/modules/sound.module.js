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
      this.#sounds = [explosion, gong, drumsticks, whoosh, drums]
   };
   trigger() {
      const index = random(0, this.#sounds.length - 1)
      const audio = new Audio(this.#sounds[index])
      audio.play()
      const img = new Image(256, 256)
      img.classList = 'image__sound'
      img.style.top = `${document.documentElement.clientHeight / 2 - 256 / 2}px`
      img.style.left = `${document.documentElement.clientWidth / 2 - 256 / 2}px`
      img.src = 'https://cdn-icons-png.flaticon.com/512/5807/5807294.png'
      /* Хотел присвоить значение задержки анимации в зависимости от длины аудио, но почему-то
      оно здесь не хочет работать. Поэтому поставлю некоторое значение по дефолту.
      img.style.animationDelay = `${audio.duration}s`
      */
      img.style.animationDelay = '.5s'
      document.body.append(img)
      setTimeout(() => document.querySelector('img').remove(), 2500)
   }
}