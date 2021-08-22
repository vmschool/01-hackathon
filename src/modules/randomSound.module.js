import { Module } from "../core/module";
import menu from "../app";

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

    playRandom(){
        let i = Math.floor(Math.random() * (sounds.length));
        let currentSound = new Audio(sounds[i]);
        let body = document.querySelector("body");
        currentSound.volume = 0.2;
        body.append(currentSound);
        currentSound.play();
    }

    addItemInMenuList() {
        menu.add('Случайный звук', this.trigger.bind(this));
      }
  
    trigger() {
        this.playRandom();
    }
  }

  export const playRandomSound = new RandomSound("type", "text");

