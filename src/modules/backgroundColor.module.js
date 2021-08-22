import { Module } from "../core/module";
import { randomImages } from "../utils";

const backgroundColorArr = ["#C0C0C0", "#FF0000", "#00FF00", "#FFFF00", "#00FFFF"];

export class BackgroundColorModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  #changeBackgroundColor() {
    const index = randomImages(0, 4);
    document.body.style.background = backgroundColorArr[index];
  }

  #trigger() {
    this.#changeBackgroundColor();
  }

  addItemInMenuList() {
    return {
      text: this.toHTML.bind(this),
      trigger: this.#trigger.bind(this),
    };
  }

  toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`;
  }
}
