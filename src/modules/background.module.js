import { Module } from '../core/module';
import { getRandomColor } from '../utils';
import { random } from '../utils';

export class BackgroundModule extends Module {
  getColor() {
    const body = document.body;
    body.style.backgroundColor = `${getRandomColor()}`;
    body.style.transition = `background-color ${random(0.2, 2)}s`;
  }

  trigger(event) {
      if (event.target.dataset.type === 'background') {
        this.getColor();
      }
  }
}