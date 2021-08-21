import menu from "../app";
import { Module } from "../core/module";
// import { ContextMenu } from "../menu";

export class ClicksModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.timer = 5;
    this.totalClicks = 0;
    this.thisTimerId = null;
    this.modal = document.createElement("div");
    this.timerHtml = document.createElement("p");
    this.totalClickHtml = document.createElement("p");
  }

  #trigger() {
    this.#createClickHTML();
  }

  #createClickHTML = () => {
    this.modal.classList.add("modalForClick");

    this.timerHtml.style.fontSize = "600px";
    this.timerHtml.style.textAlign = "center";
    this.timerHtml.style.opacity = "0.5";

    document.body.append(this.modal, this.timerHtml);
    this.startTimer();
  };

  startTimer = () => {
    const thisTimerId = setInterval(this.decrimentTimer, 100);
    this.thisTimerId = thisTimerId;

    this.setTime(this.timer);

    this.modal.addEventListener("click", () => {
      this.totalClicks++;
    });
  };

  decrimentTimer = () => {
    if (this.timer === 0) {
      this.endTimer();
    } else {
      this.timer = (this.timer * 10 - 1) / 10;
    }
    this.setTime(this.timer);
  };

  setTime = (time) => {
    this.timerHtml.innerHTML = `${time.toFixed(1)}`;
  };

  endTimer = () => {
    clearInterval(this.thisTimerId);
    console.log("stop, total = ", this.totalClicks);
    this.modal.removeEventListener("click", () => {
      this.totalClicks++;
    });
    this.totalClickHtml.textContent = `Всего кликов ${this.totalClicks}`;
    this.totalClickHtml.style.fontSize = "200px";
    this.totalClickHtml.style.textAlign = "center";
    this.totalClickHtml.style.opacity = "0.8";

    document.body.append(this.totalClickHtml);

    setTimeout(() => {
      this.modal.addEventListener("click", () => {
        this.modal.remove();
        this.timerHtml.remove();
        this.totalClickHtml.remove();
      });
    }, 2000);
  };

  addItemInMenuList() {
    menu.add(
      `Аналитика кликов\n(за ${this.timer} секунд)`,
      this.#trigger.bind(this)
    );
  }
}

export const counterClick = new ClicksModule("type", "text");
