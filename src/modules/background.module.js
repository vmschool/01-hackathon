import { Module } from "../core/module";
import { randomColorGradient } from "../utils";

export class BackgroundModule extends Module {
  #body;
  constructor() {
    super("background", "Поменять фон");
    this.#body = document.querySelector("body");
  }

  trigger() {
    this.#body.style.background = this.#getRandomColor();
  }

  #getRandomColor() {
    return randomColorGradient();
  }
}
