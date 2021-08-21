import {Module} from '../core/module'
import {random} from '../utils'

import soundCow from '../assets/sounds/cow.wav'
import soundCat from '../assets/sounds/cat.wav'
import soundDog from '../assets/sounds/dog.wav'
import soundCuckoo from '../assets/sounds/cuckoo.wav'

export class SoundModule extends Module {
  sounds

  constructor(type, text) {
    super(type, text)
    this.sounds = [soundCow, soundCat, soundDog, soundCuckoo]
  }

  async trigger() {
    const r = random(0, this.sounds.length - 1)
    console.log(r)
    const soundToPlay = this.sounds[r]
    const audio = new Audio(soundToPlay);
    await audio.play()
  }
}
