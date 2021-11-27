import {Module} from '../core/module';
import {random} from '../utils.js';

export class SoundModule extends Module {
  constructor(type, text) {
    super(type, text);
    
  }
  trigger() {
    const audio = [
      new Audio('../../assets/sounds/cow.mp3'),
      new Audio('../../assets/sounds/dog.mp3'),
      new Audio('../../assets/sounds/hyena.mp3'),
      new Audio('../../assets/sounds/owl.mp3'),
      new Audio('../../assets/sounds/rooster.mp3'),
    ];
    const rand = random(0, audio.length-1);
    console.log(rand);
    audio[rand].play();
  }
}