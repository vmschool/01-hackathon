import { Module } from '../core/module';
import { random } from '../utils';
import { soundsDefaultURLs } from '../sound.utils/constants';

const soundsURLs = soundsDefaultURLs;

export class SoundsModule extends Module {
  constructor(type, text) {
    super(type, text),
      (this.soundsURLs = soundsURLs),
      (this.soundsURLsLength = this.soundsURLs.length - 1);
  }

  createSoundHTML() {
    const soundHTML = document.createElement('audio');
    soundHTML.autoplay = '1';
    soundHTML.classList = 'sound_element';
    soundHTML.id = `se${Date.now()}`;
    soundHTML.src = `${soundsURLs[random(0, this.soundsURLsLength)]}`;
    soundHTML.alt = 'No sound, sorry :(';
    return soundHTML;
  }

  play() {
    const soundHTML = this.createSoundHTML();
    document.body.prepend(soundHTML);

    const soundId = soundHTML.getAttribute('id');

    setTimeout(() => {
      document.querySelector(`#${soundId}`).remove();
    }, random(1500, 8000));
  }

  trigger(event) {
      if (event.target.dataset.type === 'sound_element') {
        this.play();
      }
  }
}