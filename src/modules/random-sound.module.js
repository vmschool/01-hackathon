import {Module} from '../core/module'
import {random} from "@/utils";

import sound1 from '../assets/sounds/1.mp3'
import sound2 from '../assets/sounds/2.mp3'
import sound3 from '../assets/sounds/3.mp3'
import sound4 from '../assets/sounds/4.mp3'

export class RandomSound extends Module {
 constructor() {
     super("sound", "Случайный звук");
     this.audioElement = document.createElement('audio')
 }

 trigger( ) {
     const randomNumber = random(0, 3)
     const sounds = [sound1, sound2, sound3, sound4]
     this.audioElement.src = sounds[randomNumber]
     document.body.prepend(this.audioElement)
     this.audioElement.play()
 }
}