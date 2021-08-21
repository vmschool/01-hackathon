import { Module } from "@/core/module";
import * as utils from "../utils";

export default class CustomMessage extends Module {
  constructor(type, text) {
    super(type, text);
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
    // this.#delteQuote();
    const area = document.querySelector("#area");
    const wrapper = utils.createModal("qoute");
    area.append(wrapper);
    const messageText = document.createElement("span");
    messageText.classList.add("quote");
    messageText.textContent = await this.#getQuote();
    wrapper.append(messageText);
    return wrapper;
  }

  async trigger() {
    const quote = await this.#createQuote();
    utils.addObjectToArea(quote);
  }
}
