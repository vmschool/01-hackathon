import { Module } from '../core/module'
import { addEventContainer } from '../utils';
export class Soundmodule extends Module {
    constructor(type, text) {
        super(type, text)
        this.logoHTML = document.createElement('logo');
        this.audioHTML = document.createElement('audio');
        this.textHint = document.createElement('span');
    }

    trigger() {
        addEventContainer(this.type);
        const eventContainer = document.querySelector(`.${this.type}`);
        

        let context, analyser, src, array;
        const hasLogo = document.querySelector('.logo');
        if (hasLogo) {
            this.logoHTML.remove();
            this.audioHTML.remove();
            this.textHint.remove();
            this.textHint = document.createElement('span');
            this.logoHTML = document.createElement('logo');
            this.audioHTML = document.createElement('audio');
        }
        // let audioHTML = document.createElement('audio');
        let random = Math.floor(Math.random() * 5 + 1);
        this.audioHTML.src = `src/assets/sound/${random}.mp3`;
        this.audioHTML.className = 'audio'

        // let logoHTML = document.createElement('logo');
        this.logoHTML.className = 'logo'

        eventContainer.style.display = 'flex';
        eventContainer.style.justifyContent = 'center';
        eventContainer.style.height = '170px';

        
        this.textHint.style.display = 'flex';
        this.textHint.style.justifyContent = 'center';
        this.textHint.style.fontSize = '30px';
        this.textHint.textContent = 'Pause/Resume - клик левой клавишей мышки'

        document.querySelector('body').append(this.textHint);
        eventContainer.prepend(this.logoHTML);
        eventContainer.prepend(this.audioHTML);

        let logo = document.querySelector('.logo').style;

        let audio = document.querySelector('.audio');

        window.onclick = function () {
            if (!context) {
                preparation();
            }
            if (audio.paused) {
                audio.play();
                loop();
            } else {
                audio.pause();
            }
        }

        function preparation() {
            context = new AudioContext();
            analyser = context.createAnalyser();
            src = context.createMediaElementSource(audio);
            src.connect(analyser);
            analyser.connect(context.destination);
            loop();
        }

        function loop() {
            if (!audio.paused) {
                window.requestAnimationFrame(loop);
            }
            array = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(array);

            logo.minHeight = (array[40]) + "px";
            logo.width = (array[40]) + "px";
        }
    };
}

