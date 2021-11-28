import { Module } from "../core/module";
import { random } from "../utils";

export class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    document.body.style.background = `RGB(${random(0, 255)}, ${random(
      0,
      255
    )}, ${random(0, 255)})`;
    document.body.style.background = `linear-gradient(${random(
      0,
      359
    )}deg, rgba(${random(0, 255)}, ${random(0, 255)}, ${random(
      0,
      255
    )},1) 0%, rgba(${random(0, 255)}, ${random(0, 255)}, ${random(
      0,
      255
    )},1) 50%, rgba(${random(0, 255)}, ${random(0, 255)}, ${random(
      0,
      255
    )},1) 100%)`;
  }
}
