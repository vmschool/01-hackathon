import { Module } from "../core/module";
import { getArea, random } from "../utils";

export class BackgroundModule extends Module {
  constructor() {
    super("randomColor", "Create Random Background Color");
  }

  trigger() {
    const area = getArea();
    area.style.backgroundColor = `rgb(${random(0, 256)},${random(
      0,
      256
    )},${random(0, 256)})`;
  }
}
