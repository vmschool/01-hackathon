import { setTimeout } from "core-js/web/immediate";
import { Module } from "../core/module";
import { random } from "../utils";

export class MessageModule extends Module {
  constructor() {
    super("custom message", "Кастомное сообщение");
  }

  trigger() {
    const container = document.querySelector(".container");

    const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

    const messageContainer = document.createElement("div");
    messageContainer.classList.add("message-container", "hidden");

    const instructions = document.createElement("span");
    instructions.className = "module-help";
    instructions.textContent = "Остановить - Escape, продолжить - Enter";

    const messageText = document.createElement("div");

    messageContainer.append(messageText);
    container.append(instructions, messageContainer);

    function createRandomMessage() {
      const randomId = random(1, 500);
      const randomMessage = fetch(`${COMMENTS_URL}?id=${randomId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Ошибка запроса!");
          }
          return response.json();
        })
        .then((comments) => {
          messageText.textContent = comments[0].name;
        })
        .catch((error) => {
          console.error(error);
        });
    }

    function oneCycleOfMessage() {
      messageContainer.classList.remove("hidden");
        createRandomMessage();
        setTimeout(() => {
          messageText.innerHTML = "";
          messageContainer.classList.add("hidden");
        }, 2000);
    }

    oneCycleOfMessage()
    let intervalCreator1 = setInterval(() => {
      oneCycleOfMessage()
    }, 3000)

    document.addEventListener("keydown", (event) => {
      const { key } = event;
      if (key === "Escape") {
        clearInterval(intervalCreator1)
      } else if (key === "Enter") {
        oneCycleOfMessage()
        intervalCreator1 = setInterval(() => {
          oneCycleOfMessage()
        }, 3000)
      }
    });
  }
}
