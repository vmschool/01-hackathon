import { Module } from "../core/module";

export class ClicksModule extends Module {
  #clickCount = 0;
  #counterIsActive = false;
  constructor() {
    super("clicks", "Посчитать клики за (3сек)");
  }
  trigger() {
    this.#getClicks();
  }

  #getClicks() {
    if (!this.#counterIsActive) {
      this.#counterIsActive = true;
      const handler = () => {
        this.#clickGetter();
      };
      document.addEventListener("mousedown", handler);

      setTimeout(() => {
        document.removeEventListener("mousedown", handler);
        this.#clickCountPrint();
        this.#clickReset();
        this.#counterIsActive = false;
      }, 3000);
    }
  }

  #clickGetter() {
    this.#clickCount++;
  }

  #clickReset() {
    this.#clickCount = 0;
  }

  #clickCountPrint() {
    const clickInfo = document.createElement("div");
    clickInfo.textContent = `Зафиксировано кликов за три секунды: ${
      this.#clickCount
    }`;
    clickInfo.className = "click-info";

    this.#styles(clickInfo);
    this.#removeQuotes(clickInfo);

    document.body.append(clickInfo);
  }

  #styles(clickInfo) {
    clickInfo.style.fontSize = "0.85rem";
    clickInfo.style.padding = "10px";
    clickInfo.style.background = "#eee";
    clickInfo.style.borderRadius = "10px";
    clickInfo.style.boxShadow = "0 0 20px rgba(0, 0, 0, .7)";
    clickInfo.style.position = "fixed";
    clickInfo.style.zIndex = "1000";
    clickInfo.style.top = "10%";
    clickInfo.style.left = "40%";
    clickInfo.style.opacity = "0";
    clickInfo.style.transition = "opacity .3s linear";
    clickInfo.classList.add("show");

    if (clickInfo.className === "click-info show") {
      setTimeout(() => (clickInfo.style.opacity = "1"), 300);
    }
  }

  #removeQuotes(clickInfo) {
    setTimeout(() => {
      clickInfo.style.opacity = "0";
    }, 3000);
    setTimeout(() => {
      clickInfo.remove();
    }, 3500);
  }
}
