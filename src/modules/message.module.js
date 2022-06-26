import { Module } from "../core/module";
import { random } from "../utils";

export class MessageModule extends Module {
  constructor() {
    super("text", "Показать цитату");
  }

  trigger() {
    this.#getQuotes();
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
    const mainAppModules = document.querySelector(".main_app-modules");
    const quoteBlock = document.createElement("div");
    const quoteAuthor = document.createElement("h3");
    const quoteText = document.createElement("span");

    quoteBlock.className = "quote-block";
    quoteAuthor.className = "quote-author";
    quoteText.className = "quote-text";

    quoteAuthor.textContent = author;
    quoteText.textContent = `"-${text}-"`;

    this.#styles(quoteBlock, quoteAuthor);
    this.#removeQuotes(quoteBlock);

    quoteBlock.append(quoteAuthor, quoteText);
    mainAppModules.append(quoteBlock);
  }

  #styles(quoteBlock, quoteAuthor) {
    quoteBlock.style.margin = "10px 0";
    quoteBlock.style.width = "260px";
    quoteBlock.style.padding = "10px";
    quoteBlock.style.borderRadius = "10px";
    quoteBlock.style.boxShadow = "0 0 20px rgba(0, 0, 0, .7)";
    quoteBlock.style.background = "#eee";
    quoteBlock.style.opacity = "0";
    quoteBlock.style.transition = "opacity .3s linear";
    quoteBlock.classList.add("show");

    if (quoteBlock.className === "quote-block show") {
      setTimeout(() => (quoteBlock.style.opacity = "1"), 300);
    }

    quoteAuthor.style.marginBottom = "10px";
    quoteAuthor.style.fontSize = "0.85rem";
  }

  #removeQuotes(quoteBlock) {
    setTimeout(() => {
      quoteBlock.style.opacity = "0";
    }, 7000);
    setTimeout(() => {
      quoteBlock.remove();
    }, 7500);
  }
}
