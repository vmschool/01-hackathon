import * as functions from "../utils";

export default class Timer {
  constructor() {
    this.wrapper = functions.createWrapper();
    this.container = functions.createContainer(this.wrapper);
  }
  renderTimer() {
    this.container.insertAdjacentHTML(
      "afterbegin",
      `
        <div class="timer">
            <div class="numbers">
                <p class="time">0</p>
            </div>
            <div class="set-numbers">
                <input class="input input-days" type="number" placeholder="days" min="0" step="0.5">
                <input class="input input-hours" type="number" placeholder="hours" min="0" step="0.5">
                <input class="input input-minutes" type="number" placeholder="minutes" min="0" value="0.09"  step="0.5">
            </div>
            <form class="buttons">
                <button id="btn" type="button"><i id="1" class="ic_play icon" ></i></button>
                <button><i id="2" class="ic_pause icon"></i></button>
                <button><i id="3" class="ic_refresh icon"></i></button>
            </form>
        </div>
        `
    );
    functions.timerHandleClick();
  }

  renderClock() {
    this.container.insertAdjacentHTML(
      "afterbegin",
      `
        <div class="clock container__clock">
            <p class="time-units">...</p>
        </div>
        `
    );
    functions.createClock();
  }
  render() {
    if (!document.querySelector(".wrapper")) {
      document.querySelector("body").prepend(this.wrapper);
      const wrapperBtns = this.wrapper.querySelectorAll("i");
      wrapperBtns.forEach((btn) => {
        btn.addEventListener("click", (event) => {
          if (this.container.firstElementChild) {
            this.container.firstElementChild.remove();
          }
          if (event.target.classList.contains("ic_clock")) {
            if (this.wrapper.querySelector(".timer-title")) {
              this.wrapper.querySelector(".timer-title").remove();
            }
            if (!this.wrapper.querySelector(".clock-title")) {
              this.wrapper.querySelector(".clock-title");
            }
            this.wrapper.insertAdjacentHTML(
              "afterbegin",
              `
                        <p class="clock-title">clock</p>
                        `
            );
            this.renderClock();
          } else if (event.target.classList.contains("ic_timer")) {
            if (this.wrapper.querySelector(".clock-title")) {
              this.wrapper.querySelector(".clock-title").remove();
            }
            if (!this.wrapper.querySelector(".timer-title")) {
              this.wrapper.insertAdjacentHTML(
                "afterbegin",
                `
                        <p class="timer-title">timer</p>
                        `
              );
            }

            this.renderTimer();
          } else if (event.target.classList.contains("ic_close")) {
            this.wrapper.remove();
          }
        });
      });
      this.renderTimer();
      this.wrapper.insertAdjacentHTML(
        "afterbegin",
        `
                        <p class="timer-title">timer</p>
                        `
      );
      this.wrapper.querySelector(".ic_play").click();
    }
  }
}
