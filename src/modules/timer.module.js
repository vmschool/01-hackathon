// "use strict";
import { Module } from "@/core/module";
import * as utils from "../utils";

export default class Timer extends Module {
  #time;
  constructor(type, text) {
    super(type, text);
  }

  #timeDecriase(text) {
    if (this.#time === 0) {
      text.textContent = `Time is UP!!`;
      setTimeout(() => {
        const area = utils.getArea();
        area.innerHTML = "";
      }, 3000);
      return;
    }
    text.textContent = `${this.#time - 1} sec`;
    this.#time--;
    setTimeout(() => this.#timeDecriase(text), 1000);
  }

  #startTimer(event, input, text) {
    this.#time = Number(input.value);
    input.remove();
    event.target.remove();
    text.textContent = `${this.#time} sec`;
    this.#timeDecriase(text);
  }

  #updateTitle(value, text) {
    text.textContent = `${value} sec`;
  }

  #renderBlock() {
    const area = utils.getArea();
    const wrapper = utils.createModal("timer");
    const titleField = document.createElement("h3");
    titleField.classList.add("timer-title");
    titleField.textContent = `1 sec`;
    wrapper.append(titleField);
    const input = document.createElement("input");
    input.className = "timer-input";
    input.type = "number";
    input.setAttribute("min", "1");
    input.setAttribute("max", "999");
    input.setAttribute("step", "1");
    input.setAttribute("value", "1");
    wrapper.append(input);
    const startButton = document.createElement("button");
    startButton.classList.add("timer_start-button");
    startButton.value = "Start";
    startButton.textContent = "Start";
    wrapper.append(startButton);

    input.addEventListener("input", (event) => {
      let count = event.target.value;
      this.#updateTitle(count, titleField);
    });

    startButton.addEventListener("click", (event) =>
      this.#startTimer(event, input, titleField)
    );

    area.append(wrapper);
  }

  trigger() {
    this.#renderBlock();
  }
}
