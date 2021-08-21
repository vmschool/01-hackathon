import {Module} from '../core/module';
import {random} from '../utils';

export class SoundModule extends Module {
    #audio;
    #mp3;
    #container;
    constructor(){
        super('random_sound', 'Воспроизвести звук');
        this.#container = document.querySelector('body');
        this.#mp3 = ['https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3','http://www.hochmuth.com/mp3/Bloch_Prayer.mp3', 'http://www.hochmuth.com/mp3/Vivaldi_Sonata_eminor_.mp3'];
        this.#audio = new Audio(this.#mp3[random(0,2)]);
    }
    trigger(){
        this.#audio.pause();
        this.#audio = new Audio(this.#mp3[random(0,2)]);
        this.#audio.play();
        this.#showStopBtn();
    }
    #stopAudio(){
        this.#audio.pause();
    }
    #showStopBtn(){
       const btn = document.createElement('div');
       btn.className = 'btn_stop_audio';
       btn.textContent = 'stop sound';
       document.body.append(btn);
       btn.addEventListener('click', e=>{
           const {target} = e;
           target.remove();
           this.#stopAudio();
       });
    }
}