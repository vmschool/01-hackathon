import { Module } from "../core/module";
import { random, allIntervals, clearAllIntervals } from "../utils";

export class MessageModule extends Module {
  #messages;
  constructor(type, text) {
    super(type, text);
    this.#messages = [];
  }
  async trigger() {
    document.body.innerHTML = "";
    clearAllIntervals();
    await this.#getRandomMessage();
    this.#renderBlockMessage();

    // Перерендываривает блок с сообщением с опредененним интервалом
    const rerenderMessageInterval = setInterval(() => {
      document.querySelector("#blockMessage")?.remove();
      this.#renderBlockMessage();
    }, 2000);
    allIntervals.push(rerenderMessageInterval);
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
    const fullWhidthScreen = document.documentElement.clientWidth;
    const fullHeightScreen = document.documentElement.clientHeight;
    const blockWhidth = 300;
    const blockHeight = blockMessage.offsetHeight;
    console.log("~ blockHeight", blockHeight);
    blockMessage.style.width = `${blockWhidth}px`;
    blockMessage.style.top = `${random(0, fullHeightScreen - blockHeight)}px`;
    blockMessage.style.left = `${random(0, fullWhidthScreen - blockWhidth)}px`;
  }

  // Рендерит блок с сообщением на странице
  #renderBlockMessage() {
    document.body.append(
      this.#createBlockMessage(
        this.#messages[random(0, this.#messages.length - 1)]
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
