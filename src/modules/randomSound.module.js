import { Module } from "../core/module";
import { sounds } from "../utils";

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

