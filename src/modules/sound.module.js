import {Module} from '../core/module'
import { random, soundsLinks } from '../utils'

export class SoundModule extends Module {
  trigger() {
    const numberSound = random(0, (soundsLinks.length - 1))
    const audioElement = new Audio(soundsLinks[numberSound])

    audioElement.play()

    const timer = setTimeout(() => {
      audioElement.remove()
      clearTimeout(timer)
    }, 2500)
  }
}