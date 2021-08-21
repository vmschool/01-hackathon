// "use strict";
import { Module } from "@/core/module";
import * as utils from "../utils";

export default class Timer extends Module {
  #time;
  constructor(type, text) {
    super(type, text);
  }

  #timeDdecriase(text) {
    if (this.#time === 0) {
      const area = utils.getArea();
      area.innerHTML = "";
      alert("Time is up");
    }
    text.textContent = `${this.#time} sec`;
    this.#time--;
  }

  #startTimer(event, input, text) {
    this.#time = Number(input.value);
    input.remove();
    event.target.remove();
    text.textContent = `${this.#time} sec`;
    setInterval(() => this.#timeDdecriase(text), 1000);
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

    startButton.addEventListener("click", (event) =>
      this.#startTimer(event, input, titleField)
    );

    area.append(wrapper);
  }

  trigger() {
    this.#renderBlock();
  }
}
