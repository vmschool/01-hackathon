import { Module } from "../core/module";

export class ClicksModule extends Module {
  constructor(clickElement) {
    super("1", "1");
    this.clickElement = document.querySelector(clickElement);
  }

  render() {
    this.clickElement.addEventListener("click", (event) => {
      if (event.target.textContent === "Отлавливание кликов") {
        const modalWindow = document.createElement("div");
        modalWindow.className = "modal";
        modalWindow.innerHTML = `
      <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p class="modal-body-text"></p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary close-button" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>`;
        document.body.prepend(modalWindow);

        const modalBodyText = document.querySelector(".modal-body-text");

        const btnClose = document.querySelector(".close-button");

        btnClose.addEventListener("click", (e) => {
          modalWindow.style.display = "none";
        });

        let clicksLenght = 0;
        function handleClicksIncrement(el) {
          clicksLenght += 1;
        }
        let timeOfClicks = prompt("Введите количество секунд");
        timeOfClicks = Number(timeOfClicks);
        if (timeOfClicks) {
          document.body.addEventListener("click", handleClicksIncrement);
          const newInterval = setInterval(() => {
            if (timeOfClicks) {
              timeOfClicks -= 1;
              console.log(timeOfClicks);
            } else {
              clearInterval(newInterval);
              document.body.removeEventListener("click", handleClicksIncrement);
              modalWindow.style.display = "block";
              modalBodyText.textContent = clicksLenght;
            }
          }, 1000);
        }
      }
    });
  }
}
