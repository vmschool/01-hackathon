import { Module } from "../core/module";
import { getArea } from "../utils";
import { randomColorRGB } from "../utils";

export default class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text);
  }


  trigger() {
    const area = getArea();
    area.style.backgroundColor = randomColorRGB();
    area.style.transition = `background-color 500ms ease`;
  }
}
