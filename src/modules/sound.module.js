import {Module} from '../core/module'
import {random, playSound} from '../utils'

import soundCow from '../assets/cow.mp3'
import soundCat from '../assets/cat.mp3'
import soundDog from '../assets/dog.mp3'
import soundCuckoo from '../assets/cuckoo.mp3'

export class SoundModule extends Module {
  sounds

  constructor(type = 'sound', text = 'Случайный звук') {
    super(type, text)
    this.sounds = [soundCow, soundCat, soundDog, soundCuckoo]
  }

  async trigger() {
    const soundToPlay = this.sounds[random(0, this.sounds.length - 1)]
    playSound(soundToPlay)
  }
}
