import { Module } from '../core/module';

export class AudioModule extends Module {
  trigger() {
    const url = 'https://zvukogram.com/mp3/cats/1064/pikachu-malyish.mp3';
    const audio = new Audio(url);
    document.body.append(audio);

    setTimeout(() => {
      audio.play();
    }, 100);
  }
}
