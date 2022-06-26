import { Module } from "../core/module";
import { getRandomColor } from "../utils";

export class BackgroundModule extends Module {
  constructor(itemsList, item) {
    super(item.id, item.name);
    this.itemsList = document.querySelector(itemsList);
    this.item = item;
  }

  trigger() {
    this.itemsList.addEventListener("click", (event) => {
      const { target } = event;
      console.log(target);
      if (target.dataset.type === this.item.id) {
        document.body.style.backgroundColor = getRandomColor();
      }
    });
  }
}
