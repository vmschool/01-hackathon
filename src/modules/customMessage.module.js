import { Module } from "@/core/module";
import * as utils from "../utils";

export default class CustomMessage extends Module {
  constructor(type, text) {
    super(type, text);
    this.timer = utils.timer;
}

  #delteQuote() {
    if (document.querySelector(".quote")) {
      document.querySelector(".quote").remove();
    }
  }

  async #getQuote() {
    const url = `https://favqs.com/api/qotd`;
    const responsJSON = await fetch(url);
    const responeObj = await responsJSON.json();
    return responeObj.quote.body;
  }

  async #createQuote() {
    this.#delteQuote();
    const area = utils.getArea();
    const messageText = document.createElement("span");
    messageText.classList.add("quote");
    messageText.textContent = await this.#getQuote();
    area.append(messageText);
  }

  async trigger() {
    await this.#createQuote();
    setTimeout(this.#delteQuote, 5000);
  }
}
