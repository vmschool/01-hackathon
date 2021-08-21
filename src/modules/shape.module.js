import { Module } from "../core/module";
import { random } from "../utils";
import { getArea } from "@/utils";
import { randomColorRGB } from "./../utils";

export class ShapeModule extends Module {
  constructor(type, text) {
    super(type, text);

    const randomBlock = document.createElement("div");
    randomBlock.classList.add("randomBlock");
    document.body.append(randomBlock);
  }

  trigger() {
    const block = document.querySelector(".randomBlock");
    block.style.width = `${random(0, 500)}px`;
    block.style.height = `${random(0, 500)}px`;
    block.style.top = `${random(0, document.body.scrollHeight - 500)}px`;
    block.style.left = `${random(0, document.body.scrollWidth - 500)}px`;
    block.style.position = "absolute";
    block.style.transition = "all 2s ease";
    block.style.backgroundColor = randomColorRGB();
  }
}
