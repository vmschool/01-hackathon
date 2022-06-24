import { Module } from "../core/module";
import { random } from "../utils";

export class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text);
  }
  toHTML() {
    const uList = document.querySelector(".menu");
    const newElement = uList.insertAdjacentHTML(
      "afterend",
      `<li id="color" class="menu-item" data-type="${this.type}">${this.text}</li>`
    );
    return newElement;
  }
  setColor() {
    return random(100, 255);
  }

  trigger() {
    const btn = document.querySelector("#color");
    btn.addEventListener("click", () => {
      document.body.style.backgroundColor =
        "rgb(" + setColor() + "," + setColor() + "," + setColor() + ")";
    });
  }
}
