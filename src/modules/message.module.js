import { setTimeout } from "core-js/web/immediate";
import { Module } from "../core/module";
import { random } from "../utils"

export class MessageModule extends Module {
  constructor() {
    super("custom message", 'Кастомное сообщение');
  }

  trigger() {
    const bodyContainer = document.querySelector('body')
    
    const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";
    
    const messageContainer = document.createElement("div");
    messageContainer.classList.add("message-container", 'hidden');
    const messageText = document.createElement("div");

    const instructions = document.createElement('span')
    instructions.className = 'module-help'
    instructions.textContent = 'Остановить - Escape, продолжить - Enter'

    const loader = document.createElement('span')
    loader.classList.add('module-help', 'hidden')
    loader.textContent = 'Загрузка...'

    messageContainer.append(instructions, loader, messageText)
    bodyContainer.append(messageContainer);

    function createMessageList() {
      loader.classList.remove('hidden')
      let commentsList
      const MessageList = fetch(COMMENTS_URL)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Ошибка запроса!");
          }
          return response.json();
        })
        .then((comments) => {
          commentsList = comments.map((item) => {
            return item.name
          })
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          loader.classList.add('hidden')
        })
        return MessageList
    }

    
    function createRandomMessage(list) {
      const randomId = random(0, 499);
      const customMessage = document.createElement("div");
      customMessage.textContent = list[randomId];
      messageText.append(customMessage);
    }
    
    function createMessageByInterval (list) {
      messageContainer.classList.remove('hidden')
      const creator = setInterval(() => {
        messageContainer.classList.remove('hidden')
        createRandomMessage(list);
        setTimeout(() => {
          messageText.innerHTML = "";
          messageContainer.classList.add('hidden')
        }, 4000)
      }, 5000);
      return creator;
    }
    
    function run() {
      const messageList = createMessageList()
      console.log(messageList)
      
      let intervalCreator1 = createMessageByInterval(messageList);
    
      document.addEventListener("keydown", (event) => {
        const { key } = event;
        if (key === "Escape") {
          clearInterval(intervalCreator1);
        } else if (key === "Enter") {
          intervalCreator1 = createMessageByInterval();
        }
      });
    }

    run()
  }
}
