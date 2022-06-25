import {Module} from '../core/module'
import { addEventContainer } from '../utils';
export class Soundmodule extends Module {

trigger() {
        addEventContainer(this.type)
        // Выбор случайного аудиофайла
        let random = Math.floor(Math.random() * 10 + 1);
        let randomAudio = new Audio();
        randomAudio.src = `src/assets/sound/${random}.wav`;
        randomAudio.play()
        };
    };

