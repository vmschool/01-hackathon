import {Module} from '../core/module'
import { addEventContainer } from '../utils';
export class Soundmodule extends Module {

trigger() {
<<<<<<< HEAD
    addEventContainer(this.type);
=======
        addEventContainer(this.type)
>>>>>>> 11e311b67d4c45d5223117dcdba9397e070acf10
        // Выбор случайного аудиофайла
        let random = Math.floor(Math.random() * 10 + 1);
        let randomAudio = new Audio();
        randomAudio.src = `src/assets/sound/${random}.wav`;
        randomAudio.play()
        };
    };

