import {Module} from '../core/module'
export class Soundmodule extends Module {

trigger() {
        // Выбор случайного аудиофайла
        let random = Math.floor(Math.random() * 10 + 1);
        let randomAudio = new Audio();
        randomAudio.src = `src/assets/sound/${random}.wav`;
        randomAudio.play()
        };
    };

