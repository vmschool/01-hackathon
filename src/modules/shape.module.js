import { Module } from '../core/module';
import { random } from '../utils';

export class ShapeModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger(event) {
    const randomShape = document.createElement('div');
    randomShape.classList.add('randomShape');
    const area = document.querySelector('#area');
    area.append(randomShape);

    randomShape.style.display = 'block';
    randomShape.style.width = `${random(20, 400)}px`;
    randomShape.style.height = `${random(20, 400)}px`;
    randomShape.style.top = `${random(0, document.body.scrollHeight - 400)}px`;
    randomShape.style.left = `${random(0, document.body.scrollWidth - 400)}px`;
    randomShape.style.position = 'absolute';
    randomShape.style.transition = 'all 1s ease';
    randomShape.style.backgroundColor = `rgb(${random(0, 255)},${random(
      0,
      255
    )}, ${random(0, 255)})`;
    randomShape.style.borderRadius = `${random(0, 200)}px`;
  }
}
