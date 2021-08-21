import { Module } from "@/core/module";
import * as utils from "../utils";

export default class Timer extends Module {
  constructor(type, text) {
    super(type, text);
    this.time = 10;
  }

  timeDdecriase() {
    this.time--;
    console.log(this);
  }

  renderBlock() {
    const area = utils.getArea();
    const blockColor = utils.randomColorRGB();
  }

  trigger() {
    setInterval(this.timeDdecriase, 1000);
    if (this.time === 0) alert("time is up");
  }
}
