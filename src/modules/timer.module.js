import { Module } from "../core/module";
import { allIntervals, clearAllIntervals } from "../utils";

export class TimerModule extends Module {
  #time;
  constructor(type, text) {
    super(type, text);
    this.#time = 0;
  }

  trigger() {
    document.body.innerHTML = "";
    clearAllIntervals();

    this.#getTime();
    document.body.append(this.#createTimerBlock());

    const intervalTimer = setInterval(() => {
      this.#uppdateTextOfTimer();
      2;
      this.#time -= 1;
    }, 1000);

    allIntervals.push(intervalTimer);
  }

  #createTimerBlock() {
    const timerBlock = document.createElement("div");
    timerBlock.className = "timerModule-timerBlock";
    timerBlock.id = "timerBlock";
    timerBlock.textContent = `Начинаем отсчет ${this.#time}-и секунд`;

    return timerBlock;
  }

  #getTime() {
    let userTime = parseInt(
      prompt("На сколько секунд установить таймер?", 60),
      10
    );

    if (isNaN(userTime)) {
      alert("Введите корректное число для таймера");
      userTime = parseInt(prompt("На сколько установить таймер?", 30), 10);
    } else {
      this.#time = userTime;
    }
  }

  #getMiutesAndSeconds() {
    if (this.#time <= 10) {
      return { minutes: "00", seconds: `0${this.#time}` };
    } else if (this.#time < 60) {
      return { minutes: "00", seconds: `${this.#time}` };
    } else if (this.#time >= 60) {
      let minutes = Math.floor(this.#time / 60);
      let seconds = this.#time % 60;

      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
      return { minutes, seconds };
    }
  }

  #uppdateTextOfTimer() {
    const timerBlock = document.querySelector("#timerBlock");
    if (this.#time === 0) {
      clearAllIntervals();
      timerBlock.textContent = "Время вышло 🥳";
    }
    const objTime = this.#getMiutesAndSeconds();
    if (objTime.minutes === "00") {
      timerBlock.textContent = `Осталось ${objTime.seconds} секунд`;
    } else {
      timerBlock.textContent = `Осталось ${objTime.minutes} минут : ${objTime.seconds} секунд`;
    }
  }
}
