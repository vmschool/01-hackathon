import { Module } from '../core/module';
import { random } from '../utils';

export class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    const red = random(0, 255);
    const green = random(0, 255);
    const blue = random(0, 255);
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }
}
