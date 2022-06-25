import {Module} from '../core/module'
export class ClicksModule extends Module {

triger() {
    // создание кнопки Play и встраивание элемента audio в body
let playAudio = document.createElement('audio');
let playAudioButton = document.createElement('input');
playAudioButton.type="button";
playAudioButton.value = "PLAY";
let audio = document.querySelector('.audio');
audio.append(playAudio);
audio.append(playAudioButton);

let play = document.querySelector('input');
play.addEventListener('click', (event) => {
    if(event) {
        // Выбор случайного аудиофайла
        let random = Math.floor(Math.random() * 10 + 1);
        let randomAudio = new Audio();
        randomAudio.src = `src/sound/${random}.wav`;
        randomAudio.play()
        };
    });
};
};

const sound = new Modules;
sound.triger();
