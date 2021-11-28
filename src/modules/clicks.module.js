import { Module } from "../core/module.js";
import { allIntervals, clearAllIntervals } from "../utils";

export class ClicksModule extends Module {
  #time;
  #score;
  constructor(type, text) {
    super(type, text);
    this.#time = null;
    this.#score = null;
  }

  trigger() {
    document.body.innerHTML = "";
    clearAllIntervals();
    document.body.append(this.#createTimeBlock());
  }

  // Создает блок с кнопками для выбора врени таймера
  #createTimeBlock() {
    const arrTimes = [5, 10, 15, 20];

    const timeBlock = document.createElement("ul");
    timeBlock.className = "clicksModule-timeBlock";
    timeBlock.id = "time-block";

    arrTimes.forEach((time) => {
      const item = document.createElement("li");
      const timeBtn = document.createElement("button");
      timeBtn.className = "clicksModule-timeBtn";
      timeBtn.dataset.time = time;
      timeBtn.textContent = time;

      timeBtn.addEventListener("click", ({ target }) => {
        this.#time = Number(target.dataset.time);
        this.#startTimmer();
      });

      item.append(timeBtn);
      timeBlock.append(item);
    });

    return timeBlock;
  }

  // Создайт таймер
  #createTimer() {
    const timer = document.createElement("h3");
    timer.id = "timer";
    timer.className = "clicksModule-timer";
    timer.textContent = "Осталось ";
    timer.append(this.#setTime());

    return timer;
  }

  // Создайт поле для клика с их подщитыванием
  #createBtnForClick() {
    const btnForClick = document.createElement("button");
    btnForClick.id = "btn-click";
    btnForClick.className = "clicksModule-btnForClick";
    btnForClick.textContent = "ЖМИ СЮДА";

    btnForClick.addEventListener("click", () =>
      this.#addPointToScore("single")
    );
    btnForClick.addEventListener("dblclick", () =>
      this.#addPointToScore("double")
    );

    return btnForClick;
  }

  // Создайт блок с конечным счётом юзера после окончания таймера
  #createScore() {
    const score = document.createElement("h2");
    score.id = "score";
    score.className = "clickModule-score";
    score.textContent = `Ваш счет: одинарные-${this.#score.single}, двойные-${
      this.#score.double
    }`;

    return score;
  }

  // Создает блок с кнопками повторного запуска
  #createBtnBlockEndGame() {
    const btnBlockEndGame = document.createElement("div");
    btnBlockEndGame.className = "clickModule-btnBlockEndGame";
    btnBlockEndGame.id = "#btnBlockEndGame";

    const btnAgain = document.createElement("button");
    btnAgain.className = "clickModule-btnAgain";
    btnAgain.textContent = "Еще раз";
    btnAgain.addEventListener("click", () => {
      this.#removeAllBlock();
      document.body.append(this.#createTimeBlock());
    });

    btnBlockEndGame.append(btnAgain);
    return btnBlockEndGame;
  }

  #removeAllBlock() {
    document.querySelector("#time-block")?.remove();
    document.querySelector("#timer")?.remove();
    document.querySelector("#btn-click")?.remove();
    document.querySelector("#score")?.remove();
    document.querySelector(".clickModule-btnBlockEndGame")?.remove();
  }

  // Стартует таймер, рендерит его и поле для кликов
  #startTimmer() {
    this.#score = {
      single: 0,
      double: 0,
    };
    this.#removeAllBlock();
    document.body.append(this.#createTimer());
    document.body.append(this.#createBtnForClick());
  }

  // Останавливает таймер и рендерит блок с выбором времени и результат кликов
  #finishTimer(timerId) {
    this.#removeAllBlock();
    clearInterval(timerId);

    document.body.append(this.#createScore());
    document.body.append(this.#createBtnBlockEndGame());
  }

  // Устанавливает время таймера и логика работы таймер
  #setTime() {
    const spanOfTime = document.createElement("span");
    spanOfTime.textContent = `${this.#time} секунд`;
    spanOfTime.id = "screen-time";

    const timerId = setInterval(() => {
      if (this.#time > 0) {
        let currentTime = --this.#time;
        spanOfTime.textContent = `${currentTime} секунд`;
      } else {
        this.#finishTimer(timerId);
      }
    }, 1000);
    allIntervals.push(timerId);

    return spanOfTime;
  }

  // Добавляет 1-о очко в определенный счёт кликов
  #addPointToScore(score) {
    if (score === "single") {
      this.#score.single += 1;
    }
    if (score === "double") {
      this.#score.double += 1;
      this.#score.single -= 2;
    }
  }
}
