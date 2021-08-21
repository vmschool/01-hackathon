import { Module } from "../core/module";
import { getArea, random } from "../utils";
import { randomColorRGB } from "./../utils";

export class BackgroundModule extends Module {
  constructor() {
    super("randomColor", "Create Random Background Color");
  }

  trigger() {
    const area = getArea();
    area.style.backgroundColor = randomColorRGB();
    area.style.transition = `background-color 500ms ease`;
  }
}
