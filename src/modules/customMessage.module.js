import { Module } from "@/core/module";
import * as utils from "../utils";

export default class CustomMessage extends Module {
  constructor(type, text) {
    super("мustomMessage", "Get a quote");
  }

  async #getQuote() {
    const url = `https://favqs.com/api/qotd`;
    const responsJSON = await fetch(url);
    const responeObj = await responsJSON.json();
    return responeObj.quote.body;
  }

  async #createQuote() {
    const area = utils.getArea();
    if (area.querySelector(".quote")) {
      area.querySelector(".quote").remove();
    }
    const messageText = document.createElement("span");
    messageText.classList.add("quote");
    messageText.textContent = await this.#getQuote();
    area.append(messageText);
  }

  trigger() {
    this.#createQuote();
  }
}
