import { Module } from "../core/module";

const sounds = [
    'https://actions.google.com/sounds/v1/alarms/beep_short.ogg',
    'https://actions.google.com/sounds/v1/cartoon/tympani_bing.ogg',
    'https://actions.google.com/sounds/v1/alarms/bugle_tune.ogg',
    'https://actions.google.com/sounds/v1/animals/buzzing_fly.ogg',
    'https://actions.google.com/sounds/v1/emergency/emergency_siren_distant.ogg',
    'https://actions.google.com/sounds/v1/foley/jog_on_solid_wood.ogg'
]

export class RandomSound extends Module {
    constructor(type, text) {
      super(type, text);
    }

    playRandomSound(){
        let i = Math.floor(Math.random() * (sounds.length));
        let currentSound = new Audio(sounds[i]);
        let body = document.querySelector("body");
        let div = document.createElement("div");
        div.classList.add('soundDiv');
        currentSound.volume = 0.2;
        body.append(div);
        div.append(currentSound);
        currentSound.play();
    }

    removeRandomSound(){
      let allSounds = document.querySelectorAll('.soundDiv');
      allSounds.forEach((sound) =>{
        setTimeout(() => { sound.remove(); }, 4000);
      })
  }

    toHTML() {
      return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`;
    }

    addItemInMenuList() {
      return {
        text: this.toHTML.bind(this),
        trigger: this.trigger.bind(this),
      };
      }
  
    trigger() {
        this.playRandomSound();
        this.removeRandomSound();
    }
  }

