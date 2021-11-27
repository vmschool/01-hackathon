import { Module } from '../core/module';
import { random } from '../utils';

export class AudioModule extends Module {
  static type = 'AudioModule';
  static text = 'Воспроизвести звук';

  constructor() {
    super(AudioModule.type, AudioModule.text);
  }

  trigger() {
    const playList = [
      'https://zvukogram.com/mp3/p2/1632/mech-klinok-7-32516.mp3',
      'https://zvukogram.com/mp3/cats/1064/pikachu-malyish.mp3',
      'https://zvukogram.com/mp3/cats/1010/drobovik2.mp3',
      'https://zvukogram.com/mp3/cats/2722/knopka-klik-aktivnyii-blizkii-chetkii.mp3',
      'https://zvukogram.com/mp3/cats/1386/gonochnyiy-avtomobil-na-beshennoy-skorosti-skryilsya-za-povorotom.mp3',
    ];
    const randNumber = random(0, playList.length);
    const audio = new Audio(playList[randNumber]);
    document.body.append(audio);

    setTimeout(() => {
      audio.play();
    }, 1000);
  }
}
