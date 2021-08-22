import { Module } from "../core/module";

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

  toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`;
  }

  #createClickHTML = () => {
    this.modal.classList.add("modalForClick");

    this.timerHtml.style.fontSize = "50vh";
    this.timerHtml.style.textAlign = "center";
    this.timerHtml.style.opacity = "0.5";

    document.body.append(this.modal, this.timerHtml);
    this.startTimer();
  };

  startTimer = () => {
    this.thisTimerId = setInterval(this.decrimentTimer.bind(this), 100);

    this.setTime(this.timer);

    this.modal.addEventListener(
      "click",
      () => {
        this.totalClicks++;
      },
      false
    );
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
    this.modal.removeEventListener(
      "click",
      () => {
        this.totalClicks++;
      },
      false
    );
    this.totalClickHtml.textContent = `Всего кликов ${this.totalClicks}`;
    this.totalClickHtml.style.fontSize = "17vh";
    this.totalClickHtml.style.textAlign = "center";
    this.totalClickHtml.style.opacity = "0.8";

    document.body.append(this.totalClickHtml);

    setTimeout(() => {
      this.modal.addEventListener("click", () => {
        window.location.reload();
      });
    }, 2000);
  };

  addItemInMenuList() {
    return {
      text: this.toHTML.bind(this),
      trigger: this.#trigger.bind(this),
    };
  }
}
