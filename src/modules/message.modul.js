import { Module } from "../core/module";
import * as Utils from "../utils";

export class MessageModule extends Module {
  #messages;
  constructor(type, text) {
    super(type, text);
    this.#messages = [];
  }

  async trigger() {
    await this.#getRandomMessage();
    this.#renderBlockMessage();
    // Перерендываривает блок с сообщением с опредененним интервалом
    const rerenderMessageInterval = setInterval(() => {
      document.querySelector("#blockMessage")?.remove();
      this.#renderBlockMessage();
    }, 10000);
    Utils.allIntervals.push(rerenderMessageInterval);
  }

  // Создает блок рандомного сообщения
  #createBlockMessage(text) {
    const blockMessage = document.createElement("div");
    blockMessage.className = "messageModule-blockMessage";
    blockMessage.id = "blockMessage";

    const textMessage = document.createElement("p");
    textMessage.id = "textMessage";
    textMessage.className = "messageModule-textMessage";
    textMessage.textContent = text;
    blockMessage.append(textMessage);

    return blockMessage;
  }

  // Рандомно выбирает позицию для блока с сообщением
  #createPositionBlock() {
    const blockMessage = document.querySelector("#blockMessage");
    const blockWhidth = 300;
    const blockHeight = blockMessage.offsetHeight;


    blockMessage.style.width = `${blockWhidth}px`;
    blockMessage.style.top = `${Utils.random(0, Utils.DOCUMENT_HEIGHT() - blockHeight)}px`;
    blockMessage.style.left = `${Utils.random(0, Utils.DOCUMENT_WIDTH() - blockWhidth)}px`;
  }

  // Рендерит блок с сообщением на странице
  #renderBlockMessage() {
    document.body.append(
      this.#createBlockMessage(
        this.#messages[Utils.random(0, this.#messages.length - 1)]
      )
    );
    this.#createPositionBlock();    
  }

  // Асинхронная. Получает рандомные сообения и записывает их в локальный стейт
  async #getRandomMessage() {
    await fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((json) =>
        json.forEach((element) => {
          this.#messages.push(element.body);
        })
      );
  }
}
