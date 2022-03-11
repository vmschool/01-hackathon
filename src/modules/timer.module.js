import { Module } from "../core/module";
import { allIntervals, clearAllIntervals } from "../utils";

export class TimerModule extends Module {
  #time;
  constructor(type, text) {
    super(type, text);
    this.#time = 0;
  }

  trigger() {
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
    let userTime = +prompt("На сколько секунд установить таймер?", 60);

    if (isNaN(userTime)) {
      alert("Введите корректное число для таймера");
      this.#getTime()
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
    const objTime = this.#getMiutesAndSeconds();

    objTime.minutes === "00"
    ? timerBlock.textContent = `Осталось ${objTime.seconds} секунд`
    : timerBlock.textContent = `Осталось ${objTime.minutes} минут : ${objTime.seconds} секунд`
    

    if (this.#time === 0) {
      clearAllIntervals();
      timerBlock.textContent = "Время вышло 🥳";
      setTimeout(() => timerBlock.remove(), 5000)
    }
  }
}
