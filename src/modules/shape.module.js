import { Module } from "../core/module";

export class ShapeModule extends Module {
  constructor(itemsList, item) {
    super(item.id, item.name);
    this.itemsList = document.querySelector(itemsList);
    this.item = item;
  }

  getRandomShape() {
    const block = document.createElement("div");
    block.className = "shape-block";
    const windowWidth = window.screen.width - 250;
    const windowHeight = window.screen.height - 250;
    block.style.right = `${Math.random() * windowWidth}px`;
    block.style.top = `${Math.random() * windowHeight}px`;
    block.style.width = `${Math.random() * 375}px`;
    block.style.height = `${Math.random() * 500}px`;
    block.style.transform = `scale(${Math.random() * 2})`;
    block.style.transform = `rotate(${Math.random() * 360}deg)`;
    block.style.borderRadius = `${Math.random() * 100}px`;
    setTimeout(() => (block.style.opacity = "0"), 2000);
    return block;
  }

  trigger() {
    this.itemsList.addEventListener("click", (event) => {
      const { target } = event;
      if (target.dataset.type === this.item.id) {
        document.body.append(this.getRandomShape());
      }
    });
  }
}
