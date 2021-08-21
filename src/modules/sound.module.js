import { Module } from '../core/module';
import { random } from '../utils'

import sound1 from '../assets/sounds/death.mp3'
import sound2 from '../assets/sounds/descent.mp3'
import sound3 from '../assets/sounds/discord.mp3'
import sound4 from '../assets/sounds/hurt.mp3'
import sound5 from '../assets/sounds/jojo.mp3'
import sound6 from '../assets/sounds/jump.mp3'
import sound7 from '../assets/sounds/kick.mp3'
import sound8 from '../assets/sounds/knock.mp3'
import sound9 from '../assets/sounds/laser.mp3'
import sound10 from '../assets/sounds/strike.mp3'
import sound11 from '../assets/sounds/teleport.mp3'
import sound12 from '../assets/sounds/win.mp3'

const sounds = [
  sound1,
  sound2,
  sound3,
  sound4,
  sound5,
  sound6,
  sound7,
  sound8,
  sound9,
  sound10,
  sound11,
  sound12
]

// import sound from `../assets/sounds/${getSoundSrc()}`
//console.log(soundFiles);

//import sound from '../assets/sounds/' + getSoundSrc() + '.mp3'

function getSoundSrc() {
  return sounds[random(0, sounds.length - 1)]
}

export class SoundModule extends Module {
  
  constructor(type, text) {
    super(type, text)
    this.#displayValues.className = `module-${ this.type }`
  }

  createSound() {
    //console.log(await sound);
    //const audio = await new Audio(sound)
    //console.log(sound);
    //setTimeout(() => audio.play(), 500)
    // audio.play()
  }

  trigger() {
      new Audio(getSoundSrc()).play()
      //this.createSound()
  }
}

