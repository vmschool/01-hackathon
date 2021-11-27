import { Module } from '../core/module';

export class AudioModule extends Module {
  trigger() {
    const playList = [
      'https://zvukogram.com/mp3/p2/1632/mech-klinok-7-32516.mp3',
      'https://zvukogram.com/mp3/cats/1064/pikachu-malyish.mp3',
      'https://zvukogram.com/mp3/cats/1010/drobovik2.mp3',
    ];
    const url = playList[0];
    const audio = new Audio(url);
    document.body.append(audio);

    setTimeout(() => {
      audio.play();
    }, 100);
  }
}
