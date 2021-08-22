import { Module } from '../core/module';
import { random } from "../utils"
export class BackgroundModule extends Module {

  changeBackgroundColor(){
    document.body.style.backgroundColor=
      `hsl(
      ${random(0,360)},
      ${random(0,100)}%,
      ${random(0,100)}%)
    `
  }

  trigger(){
    this.changeBackgroundColor();
  }
}
