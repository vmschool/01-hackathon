import { Module } from "../core/module";
import { random, showError, getArea, createModal } from "../utils";

export default class CustomMessageModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  static async #getQuote() {
    try {
      const num = random(0, 1);
      const url = num > 0.5 ? 'https://favqs.com/api/qotd' : 'https://api.chucknorris.io/jokes/random';
      const response = await fetch(url);
      // if (!response.ok) {
      //   throw new Error(`status isn't ok`);
      // }
      const responseObj = await response.json();
      return {
        body: `${num > 0.5 ? responseObj?.quote.body : responseObj.value}`,
        author: `${num > 0.5 ? responseObj?.quote.author : 'Chuck Norris'}`,
      };
    } catch (error) {
      showError(error);
    }
  }

  async #createQuote() {
    const area = getArea();
    const wrapper = createModal("quote");
    wrapper.classList.add("quote");
    const messageText = document.createElement("span");
    wrapper.append(messageText);
    const quote = await CustomMessageModule.#getQuote();
    const quoteText = quote.body;
    const quoteAuthor = quote.author;
    const author = document.createElement("span");
    author.classList.add("quote-author");
    wrapper.append(author);
    author.textContent = quoteAuthor;

    messageText.textContent = `"${quoteText}"`;
    area.append(wrapper);

    let timerId;

    wrapper.addEventListener("mouseover", () => {
      clearTimeout(timerId);
    });

    wrapper.addEventListener("mouseleave", () => {
      timerId = setTimeout(() => wrapper.remove(), 2500);
    });
  }

  async trigger() {
    await this.#createQuote();
  }
}
