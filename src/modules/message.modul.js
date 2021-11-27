import { Module } from "../core/module";
import { random } from "../utils";

export class MessageModule extends Module {
  #messages;
  constructor(type, text) {
    super(type, text);
    this.#messages = [];
  }
  async trigger() {
    await this.#getRandomMessage();
    this.#renderBlockMessage();
    document.body.append(this.#createBtnBlock());

    // Перерендываривает блок с сообщением с опредененним интервалом
    setInterval(() => {
      document.querySelector("#blockMessage")?.remove();
      this.#renderBlockMessage();
    }, 2000);
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

  // Создает кнопку возврата в меню
  #createBtnBlock() {
    const btnBackToMenu = document.createElement("button");
    btnBackToMenu.className = "messageModule-btnBackToMenu";
    btnBackToMenu.textContent = "Вернутся в меню";
    btnBackToMenu.style.position = "absolute";
    btnBackToMenu.style.top = "50%";
    btnBackToMenu.style.left = "50%";
    btnBackToMenu.style.transform = "translate(-50%, -50%)";
    btnBackToMenu.style.zIndex = "999";
    btnBackToMenu.addEventListener("click", () => {
      console.log("btnBackToMenu");
    });

    return btnBackToMenu;
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
