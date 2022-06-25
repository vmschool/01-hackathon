import { Module } from "../core/module";
import { random } from "../utils";

export class MessageModule extends Module {
  constructor() {
    super("text", "Показать цитату");
  }
  trigger() {
    this.#getQuotes();
    this.#removeQuotes();
  }

  async #getQuotes() {
    const QUOTES_URL = "https://type.fit/api/quotes";
    try {
      const requests = await fetch(QUOTES_URL);
      if (!requests.ok) {
        throw new Error("Возникла ошибка при загрузке данных.");
      }
      const responses = await requests.json();
      const randomQuoteId = random(0, responses.length);
      const quoteText = responses[randomQuoteId].text;
      const quoteAuthor = responses[randomQuoteId].author;
      this.#createQuoteBlock(quoteText, quoteAuthor);
    } catch (error) {
      console.log(error);
    }
  }

  #createQuoteBlock(text, author) {
    const quoteBlock = document.createElement("div");
    const quoteAuthor = document.createElement("h3");
    const quoteText = document.createElement("span");

    quoteBlock.className = "quote-block";
    quoteAuthor.className = "quote-author";
    quoteText.className = "quote-text";

    quoteAuthor.textContent = author;
    quoteText.textContent = `"-${text}-"`;

    quoteBlock.append(quoteAuthor, quoteText);
    document.body.append(quoteBlock);
  }

  #removeQuotes() {
    setTimeout(() => {
      const quoteToRemove = document.querySelector(".quote-block");
      quoteToRemove.remove();
    }, 7000);
  }
}
