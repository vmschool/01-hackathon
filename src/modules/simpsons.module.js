import { Module } from "../core/module";

export class SimpsonsModule extends Module {
  #el;
  #body;

  constructor(type, text) {
    super(type, text);
    this.#body = document.querySelector("body");
    this.#el = document.createElement("div");
    this.#el.dataset.type = this.type;
    this.#el.className = `module-${this.type}`;
    this.#body.append(this.#el);
    this.destroy(this.#el, this.type);
  }
  trigger() {
    const sympsonsUrl = "https://thesimpsonsquoteapi.glitch.me/quotes";

    const createSympsonQuoteElement = (quote) => {
      const sympsonQuoteElement = document.createElement("div");
      sympsonQuoteElement.textContent = quote;

      return sympsonQuoteElement;
    };
    const createSympsonNameElement = (character) => {
      const sympsonNameElement = document.createElement("div");
      sympsonNameElement.textContent = character;

      return sympsonNameElement;
    };
    const createSympsonImageElement = (image) => {
      const sympsonImageElement = document.createElement("img");
      sympsonImageElement.src = image;
      return sympsonImageElement;
    };

    const renderSympsons = async () => {
      try {
        const response = await fetch(sympsonsUrl);
        if (!response.ok) {
          dataContainer.textContent = "There is an error..sorry";
          throw new Error("There is an error...sorry");
        } else {
          const result = await response.json();
          const data = [];

          result.forEach((obj) => {
            for (let prop in obj) {
              data.push(obj[prop]);
            }

            this.#el.append(
              createSympsonQuoteElement(data[0]),
              createSympsonNameElement(data[1]),
              createSympsonImageElement(data[2])
            );
          });
        }
      } catch (error) {
        console.log("loading error");
      } finally {
      }
    };

    renderSympsons();
  }
}
