import {Module} from '@/core/module';
import * as UTILS from "@/core/utils";


export class RandomSound extends Module {
    constructor(type, text) {
        super(type, text);
    }
    toHTML() {
        return super.toHTML();
    }
    trigger() {
        return new Promise(() => {
            const soundModule = document.querySelector("[data-type = 'randomSound']");
            soundModule.addEventListener('click', () => {
                const sound = document.querySelector('.sound')
                if(sound) {
                    sound.remove()
                    this.createElement()
                } else {
                    this.createElement()
                }

            })

        })
    }

    createElement() {
        const audioElement = document.createElement('audio')
        audioElement.src = `../src/audio/${UTILS.random(1, 8)}.mp3`
        audioElement.classList = 'sound'
        audioElement.autoplay = true
        document.body.append(audioElement)
        setTimeout(()=> {
            audioElement.remove()
        },10000)
    }
}