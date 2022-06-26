import { Module } from "../core/module";

export class Countdown extends Module {
  #body;
  #formInputLabelInnerText;

  constructor() {
    super("countdown", "таймер отсчета");
    this.#body = document.querySelector("body");
    this.#formInputLabelInnerText = ["дней", "часов", "минут", "секунд"];
    this.days = 0;
    this.hours = 0;
    this.minets = 0;
    this.seconds = 0;
  }

  renderForm() {
    const form = document.createElement("div");
    form.className = "timer-form";

    const formTitle = document.createElement("h1");
    formTitle.id = "total-amount";
    formTitle.innerText = "Таймер обратного отсчёта";
    form.append(formTitle);

    this.#formInputLabelInnerText.forEach((el, id) => {
      const formInputLabel = document.createElement("label");
      formInputLabel.className = "timer-form__input-label";
      formInputLabel.innerText = `Введите кол-во ${el}`;
      const formInput = document.createElement("input");
      formInput.className = "timer-form__donate-input";
      formInput.name = "amount";
      formInput.type = "number";
      formInput.max = "100";
      formInput.min = "1";
      formInput.dataset.id = `${id}`;
      formInput.required = "";
      formInputLabel.append(formInput);
      const foo = document.createElement("span");
      foo.className = "foo";
      form.append(foo);
      form.append(formInputLabel);
    });

    const formButton = document.createElement("button");
    formButton.className = "timer-form__submit-button";
    formButton.type = "submit";
    formButton.innerText = "Запустить таймер";
    form.append(formButton);
    return this.#body.append(form);
  }

  renderTimer() {
    const timerContainer = document.createElement("div");
    timerContainer.className = "timers-container";

    const timerContainerTitle = document.createElement("h2");
    timerContainerTitle.className = "timers-container__title";
    timerContainerTitle.innerText = "Таймер";
    timerContainer.append(timerContainerTitle);

    const childreenContainerTimer = document.createElement("div");
    childreenContainerTimer.id = "timer";
    timerContainer.append(childreenContainerTimer);

    return this.#body.append(timerContainer);
  }

  trigger() {
    this.#buttonsFormTimer();
  }

  #buttonsFormTimer() {
    const buttonFormTimerClick = document.querySelector(
      ".timer-form__submit-button"
    );

    function addZero(numberStr) {
      return String(numberStr).length === 1
        ? `0${numberStr}`
        : String(numberStr);
    }

    function createErrorBlock(errorMessage) {
      const errorBlock = document.createElement("span");
      errorBlock.innerText = errorMessage;
      errorBlock.className = "error-message-block";
      return errorBlock;
    }

    const errorMessage = document.querySelector(".foo");
    const errorMessageBlockFromDOM = errorMessage.querySelector(
      ".error-message-block"
    );

    function funcTimer() {
      const dataIdInput1 = document.querySelector(`[data-id="0"]`);
      const dataIdInput2 = document.querySelector('[data-id="1"]');
      const dataIdInput3 = document.querySelector(`[data-id="2"]`);
      const dataIdInput4 = document.querySelector(`[data-id="3"]`);

      this.seconds = dataIdInput4.value.trim();
      this.days = dataIdInput1.value.trim();
      this.hours = dataIdInput2.value.trim();
      this.minets = dataIdInput3.value.trim();

      if (!this.days && !this.hours && !this.minets && !this.seconds) {
        const errorBlock = createErrorBlock("Введите значение");
        errorMessage.append(errorBlock);
      } else if (this.days || this.hours || this.minets || this.seconds) {
        dataIdInput1.value = "";
        dataIdInput2.value = "";
        dataIdInput3.value = "";
        dataIdInput4.value = "";

        let date = new Date();

        let days = this.days * (1000 * 60 * 60 * 24);
        let hours = this.hours * (1000 * 60 * 60);
        let minets = this.minets * (1000 * 60);
        let seconds = this.seconds * 1000;
        let ms = date.getTime() + (days + hours + minets + seconds);
        let maxDate = new Date(ms).toISOString();

        let timer = setInterval(function updateTimer() {
          let future = Date.parse(maxDate);
          let now = new Date();
          let diff = future - now;

          let days = Math.floor(diff / (1000 * 60 * 60 * 24));
          let hours = Math.floor(diff / (1000 * 60 * 60));
          let mins = Math.floor(diff / (1000 * 60));
          let secs = Math.floor(diff / 1000);
          let d = days;
          let h = hours - days * 24;
          let m = mins - hours * 60;
          let s = secs - mins * 60;
          const timerItem = document.querySelector("#timer");
          timerItem.innerHTML =
            "<div>" +
            addZero(d) +
            "<span>Дни</span></div>" +
            "<div>" +
            addZero(h) +
            "<span>Часы</span></div>" +
            "<div>" +
            addZero(m) +
            "<span>Минуты</span></div>" +
            "<div>" +
            addZero(s) +
            "<span>Секунды</span></div>";

          if (diff < 1000) {
            clearInterval(timer);
            timerItem.style.display = "none";
            alert("Отсчёт закончен");
          }
        }, 1000);
      }
      if (errorMessageBlockFromDOM) {
        errorMessageBlockFromDOM.remove();
      }

      this.removeEventListener("click", funcTimer);
    }

    buttonFormTimerClick.addEventListener("click", funcTimer);
  }
}

// const timer = new Countdown();
// timer.trigger();
// timer.renderForm();
// timer.renderTimer();
