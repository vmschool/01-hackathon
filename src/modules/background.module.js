import { Module } from "../core/module";

export class BackgroundModule extends Module {
  #body;
  constructor(type, text) {
    super(type, text);
    this.#body = document.querySelector("body");
  }

  trigger() {
    this.#body.style.backgroundColor = this.#getRandomColor();
  }

  #getRandomColor() {
    return (
      "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substring(1, 7)
    );
  }
}
