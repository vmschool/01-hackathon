import { Module } from "../core/module";

export class ClicksModule extends Module {
  constructor(itemsList, item) {
    super(item.id, item.name);
    this.itemsList = document.querySelector(itemsList);
    this.item = item;
  }

  handleDeleteWindow(modalWindow) {
    modalWindow.style.display = "none";
  }

  getRandomColor() {
    const colors = [
      "skyblue",
      "yellow",
      "green",
      "#c1c1c1",
      "orange",
      "lime",
      "aqua",
      "fuchsia",
    ];
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
  }

  getAnimation() {
    const animationBlock = document.createElement("div");
    animationBlock.className = "clicks-timer-element";
    const animationBlockTime = document.createElement("h1");
    animationBlockTime.className = "timer-name-head";
    animationBlock.append(animationBlockTime);
    return animationBlock;
  }

  trigger() {
    this.itemsList.addEventListener("click", (event) => {
      const { target } = event;

      if (target.dataset.type === this.item.id) {
        // Диалоговое окно
        const modalWindow = document.createElement("div");
        modalWindow.className = "modal";
        modalWindow.innerHTML = `
          <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Количество кликов</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p class="modal-body-text"></p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary close-button" data-bs-dismiss="modal">Закрыть</button>
            </div>
          </div>
        </div>`;
        document.body.prepend(modalWindow);

        const modalWindowBodyText = document.querySelector(".modal-body-text");

        // Реализация закрытия окна
        document.body
          .querySelector(".close-button")
          .addEventListener("click", () =>
            this.handleDeleteWindow(modalWindow)
          );

        document.body
          .querySelector(".btn-close")
          .addEventListener("click", () =>
            this.handleDeleteWindow(modalWindow)
          );

        let clicksLenght = 0;
        // Функция которая помогает нам считать клики
        function handleClicksIncrement() {
          clicksLenght += 1;
        }
        let timeOfClicks = prompt("Введите количество секунд");

        const animationBlock = this.getAnimation();

        timeOfClicks = Number(timeOfClicks);
        if (!isNaN(timeOfClicks) && timeOfClicks > 0) {
          document.body.prepend(animationBlock);
          document.body.addEventListener("click", handleClicksIncrement);
          const newInterval = setInterval(() => {
            if (timeOfClicks) {
              timeOfClicks -= 1;
              animationBlock.style.backgroundColor = this.getRandomColor();
              animationBlock.querySelector("h1").textContent = timeOfClicks;
            } else {
              clearInterval(newInterval);
              document.body.removeEventListener("click", handleClicksIncrement);
              modalWindow.style.display = "block";
              modalWindowBodyText.textContent = clicksLenght;
              document.body.querySelector(".clicks-timer-element").remove();
            }
          }, 1000);
        } else {
          modalWindow.style.display = "block";
          modalWindowBodyText.textContent = "Необходимо ввести число!";
        }
      }
    });
  }
}
