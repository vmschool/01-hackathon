import { Module } from '../core/module';

export class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    const elementsBodyStyle = document.body.style.background = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return elementsBodyStyle;
  }
}
