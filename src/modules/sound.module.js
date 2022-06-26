import {Module} from '../core/module'
import { addEventContainer } from '../utils';
export class Soundmodule extends Module {

trigger() {
    let context, analyser, src, array;

    let audioHTML = document.createElement('audio');
    let random = Math.floor(Math.random() * 5 + 1);
    audioHTML.src = `src/sound/${random}.mp3`;
    audioHTML.className = 'audio'
    
    let logoHTML = document.createElement('logo');
    logoHTML.className = 'logo'
    
    body = document.querySelector('body');
    body.style.display = 'flex';
    body.style.justifyContent = 'center';
    body.style.marginTop = '10%';
    body.style.width = '100vw';
    body.style.background = '#1e1e1e';
    body.style.minheight = '100vh';
    
    body.prepend(logoHTML);
    body.prepend(audioHTML);
    
    let logo = document.querySelector('.logo').style;
    
    let audio = document.querySelector('.audio');
    
    window.onclick = function(){
        if(!context){
            preparation();
        }
        if(audio.paused){
            audio.play();
            loop();
        }else{
            audio.pause();
        }
    }
    
    function preparation(){
        context = new AudioContext();
        analyser = context.createAnalyser();
        src = context.createMediaElementSource(audio);
        src.connect(analyser);
        analyser.connect(context.destination);
        loop();
    }
    
    function loop(){
        if(!audio.paused){
            window.requestAnimationFrame(loop);
        }
        array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(array);
    
        logo.minHeight = (array[40])+"px";
        logo.width =  (array[40])+"px";
    }
};
}

