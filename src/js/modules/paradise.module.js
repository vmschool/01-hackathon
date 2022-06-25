import Module from '../core/module';
import AudioBoxScene from '../core/audiobox.scene';
import AUDIO from '../../audio/stas-mikhajjlov-vsjo-dlja-tebja.mp3';
import STAS_IMG from '../../img/stas/stas_1.jpg';
import FLOWERS_IMG from '../../img/flowers.jpg';
import SEA_IMG from '../../img/sea.jpg';
import STARS_IMG from '../../img/stars.jpg';
import FOG_IMG from '../../img/fog.jpg';
import SUNRISE_IMG from '../../img/sunrise.jpg';
import WORLD_IMG from '../../img/world.jpg';

export default class ParadiseModule extends Module {
  constructor(text) {
    super('paradise', text);

    const body = document.querySelector('body');
    this.audioBoxScene = new AudioBoxScene(
      STAS_IMG,
      [FLOWERS_IMG, SEA_IMG, STARS_IMG, FOG_IMG, WORLD_IMG, SUNRISE_IMG],
      AUDIO,
    );
    this.audioBoxScene.render(body);
  }

  trigger() {
    if (this.audioBoxScene.isOpen) {
      this.audioBoxScene.close();
      return;
    }

    this.audioBoxScene.open();
  }
}
