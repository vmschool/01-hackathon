import { Module } from "../core/module";
import { randomColor } from "../utils";

export class ClicksModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.countNumbers = document.querySelector(".count-numbers");
    this.description = document.querySelector(".description");
    this.btn1 = document.querySelector(".game");
    this.btn2 = document.querySelector(".game-sub");
    this.block = document.querySelector(".block-game");
    this.clicks = document.querySelector(".clicks");
    this.info = document.querySelector(".info");
    this.timerInfo = document.querySelector(".timer");
  }

  trigger() {
    const hasClicker = document.querySelector(".count-clicker");
    if (!hasClicker) {
      this.buttonsAnimated();
      this.hide();
      this.clickCount;
      this.colored();
      this.timer();
      this.gameStart();
    }
  }

  /* -----Создаем кнопки и игровое поле----- */

  buttonsAnimated() {
    this.btn1.onmousemove = function (e) {
      const x = e.pageX - this.btn1.offsetLeft;
      const y = e.pageY - this.btn1.offsetTop;
      this.btn1.style.setProperty("--x", x + "px");
      this.btn1.style.setProperty("--y", y + "px");
    };

    this.btn2.onmousemove = function (e) {
      const x = e.pageX - this.btn2.offsetLeft;
      const y = e.pageY - this.btn2.offsetTop;
      this.btn2.style.setProperty("--x", x + "px");
      this.btn2.style.setProperty("--y", y + "px");
    };

    this.block.onmousemove = function (e) {
      const x = e.pageX - this.block.offsetLeft;
      const y = e.pageY - this.block.offsetTop;
      this.block.style.setProperty("--x", x + "px");
      this.block.style.setProperty("--y", y + "px");
    };
  }

  /* -----Скрываем контент по клику на кнопки и добавляем новый----- */

  hide() {
    this.btn1.addEventListener("click", () => {
      this.countNumbers.style.display = "none";
      this.description.style.display = "block";
    });
  }

  /* ----- Функция подсчета кликов ----- */

  clickCount() {
    let click = 0;
    this.block.addEventListener("click", () => {
      click += 1;
      this.clicks.textContent = `Ваш результат: ${click} кликов`;
    });
  }

  /* ----- Функция смены бекграунда при клике ----- */

  colored() {
    this.block.addEventListener("click", () => {
      this.block.style.border = `5px solid ${randomColor()}`;
    });
  }

  /* ----- Функция таймера ----- */

  timer() {
    let secs = this.timerInfo.innerHTML;
    --secs;
    this.timerInfo.innerHTML = secs;
    if (this.timerInfo.innerHTML == 0) {
      this.block.style.display = "none";
      this.info.style.display = "none";
      this.timerInfo.style.display = "none";
    }
  }

  /* ----- Функция запускающая игру ----- */

  gameStart() {
    clickCount();
    console.log(123);
    this.btn2.addEventListener("click", () => {
      this.description.style.display = "none";
      this.block.style.display = "inline-flex";
      this.info.style.display = "block";
      this.timerInfo.style.display = "block";
      setInterval(timer, 1000);
    });
  }
}
