import { Module } from "@/core/module";
import * as utils from "../utils";

export default class CustomMessage extends Module {
  constructor(type, text) {
    super(type, text);
  }

  async #getQuote() {
    try {
      const num = utils.random(0, 1);
      const url = num > 0.5 ? 'https://favqs.com/api/qotd' : 'https://api.chucknorris.io/jokes/random';
      const responsJSON = await fetch(url);
      if (!responsJSON.ok) throw new Error(`status isn't ok`);
      const responeObj = await responsJSON.json();
      return {
        body: `${num > 0.5 ? responeObj.quote.body : responeObj.value}`,
        author: `${num > 0.5 ? responeObj.quote.author : 'Chuck Norris'}`,
      };
    } catch (error) {
      console.error(error);
    }
  }

  async #createQuote() {
    const area = utils.getArea();
    const wrapper = utils.createModal("quote");
    wrapper.classList.add("quote");
    const messageText = document.createElement("span");
    wrapper.append(messageText);
    const quote = await this.#getQuote();
    const quoteText = quote.body;
    const quoteAuthor = quote.author;
    const author = document.createElement("span");
    author.classList.add("quote-author");
    wrapper.append(author);
    author.textContent = quoteAuthor;

    messageText.textContent = `"${quoteText}"`;
    area.append(wrapper);

    let removeItem = () => {
      return setTimeout(() => wrapper.remove(), 2500);
    };

    wrapper.addEventListener("mouseover", (event) => {
      clearTimeout(removeItem());
    });

    wrapper.addEventListener("mouseleave", (event) => {
      removeItem();
    });
  }

  async trigger() {
    await this.#createQuote();
  }
}
