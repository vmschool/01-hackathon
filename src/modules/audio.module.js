import { Module } from '../core/module';

export class AudioModule extends Module {
  trigger() {
    //должно отрабатывать надо проверить
    const urlAudio = 'https://zvukogram.com/mp3/cats/1064/pikachu-malyish.mp3';
    const audioElement = document.createElement('audio');
    audioElement.innerHTML = '<source src="' + urlAudio + '" type="audio/mpeg" />';
    audioElement.play();
  }
}
