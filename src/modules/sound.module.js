import {Module} from '../core/module'
import { random } from '../utils'

export class SoundModule extends Module {
  constructor(type, text) {
    super(type, text)
  }

  trigger() {
    const soundList = [
      'https://scanca.net/netcat_files/84/83/h_6fbfe6ba6287925e0126e66359696777', 'https://scanca.net/netcat_files/84/83/h_8fa78988968ad86ab23eabbe71010329', 'https://scanca.net/netcat_files/84/83/h_e8f8f6209cc6fba57f6b3c0e23140896', 'https://scanca.net/netcat_files/84/83/h_3c602c7109a7d8ad07d8bf97f633f908', 'https://scanca.net/netcat_files/84/83/h_29d4110b4239efd02ef57255551c571e',
    ]

    const index = random(0, 4)
  
    const sound = new Audio(soundList[index])
    sound.play()
  }
}