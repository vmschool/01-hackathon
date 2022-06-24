import Module from '../core/module';
import { getRandomStringRGB } from '../utils';

export default class BackgroundModule extends Module {
  constructor(text) {
    super('background', text);
  }

  trigger() {
    const body = document.querySelector('body');

    const newColor = getRandomStringRGB();
    body.style.backgroundColor = newColor;
  }
}
