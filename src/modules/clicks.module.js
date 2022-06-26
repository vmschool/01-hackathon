import { Module } from '../core/module'

export class ClicksModule extends Module {
  #clickCount = 0;
  constructor() {
    super("clicks", "Посчитать клики за три секунды");
  }
  trigger() {
    this.#getClicks();
  }

  #getClicks() {
    const handler = () => {
      this.#clickGetter()
    }
    document.addEventListener("mousedown", handler);
    
    setTimeout(() => {
      document.removeEventListener("mousedown", handler);
      this.#clickCountPrint();
      this.#clickReset();
    }, 3000);
  }

  #clickGetter() {
    this.#clickCount++;
  }

  #clickReset() {
    this.#clickCount = 0;
  }

  #clickCountPrint() {
    const clickInfo = document.createElement("div");
    clickInfo.textContent = `Зафиксировано кликов за три секунды: ${this.#clickCount}.`;
    clickInfo.className = "click-info";
    document.body.append(clickInfo);
    setTimeout(() => {
      const clickInfoToRemove = document.querySelector(".click-info");
      clickInfoToRemove.remove();
    }, 3000);
  }
}