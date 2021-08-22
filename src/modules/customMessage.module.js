import { Module } from "@/core/module";
import * as utils from "../utils";

export default class CustomMessage extends Module {
  constructor(type, text) {
    super(type, text);
  }

  async #getQuote() {
    try {
      const url = `https://favqs.com/api/qotd`;
      const responsJSON = await fetch(url);
      if (!responsJSON.ok) throw new Error(`status isn't ok`);
      const responeObj = await responsJSON.json();
      return responeObj.quote.body;
    } catch (error) {
      console.error(error);
    }
  }

  async #createQuote() {
    const area = utils.getArea();
    const wrapper = utils.createModal("quote");
    wrapper.classList.add("quote");
    area.append(wrapper);
    const messageText = document.createElement("span");
    messageText.textContent = "Loading the quote...";
    wrapper.append(messageText);
    messageText.textContent = await this.#getQuote();
    area.append(wrapper);

    setTimeout(() => wrapper.remove(), 2500);

    wrapper.addEventListener("mouseover", (event) => {
      setTimeout(() => wrapper.remove(), 2500);
    });

    wrapper.addEventListener("mouseout", (event) => {
      setTimeout(() => wrapper.remove(), 2500);
    });
    // return wrapper;
  }

  async trigger() {
    await this.#createQuote();
    // const quote = await this.#createQuote();
    // utils.addObjectToArea(quote,1500);
  }
}
