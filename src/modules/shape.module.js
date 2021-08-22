import { Module } from "../core/module";
import { createEl, getArea, random } from "../utils";
import { randomColorRGB } from "./../utils";

export default class ShapeModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  #createBlock() {
    const randomBlock = createEl("div", "", ["randomBlock"]);
    const closeRandomBlock = createEl("button", "", ["modal_close-button"]);
    if (closeRandomBlock) {
      closeRandomBlock.textContent = "\u2716";
      closeRandomBlock.addEventListener("click", (event) => {
        event.target.parentNode.remove();
      });
      randomBlock.append(closeRandomBlock);
      const area = getArea();
      area.append(randomBlock);
      return randomBlock;
    }
  }

  #changeBlock(block) {
    block.style.width = `${random(0, 500)}px`;
    block.style.borderRadius = "5px";
    block.style.height = `${random(0, 500)}px`;
    block.style.top = `${random(0, document.body.scrollHeight - 500)}px`;
    block.style.left = `${random(0, document.body.scrollWidth - 500)}px`;
    block.style.position = "absolute";
    block.style.transition = "all 2s ease";
    block.style.backgroundColor = randomColorRGB();
  }

  trigger() {
    const block = document.querySelector(".randomBlock");
    if (block) {
      this.#changeBlock(block);
    } else {
      const block2 = this.#createBlock();
      this.#changeBlock(block2);
    }
  }
}
