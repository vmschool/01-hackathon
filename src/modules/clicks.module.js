import { Module } from "../core/module";
import { randomColor } from "../utils";
import { addEventContainer } from "../utils";

export class ClicksModule extends Module {
  constructor(type, text) {
    super(type, text);

    /* Секция сыграем в игру */
    this.countNumbers = document.createElement("section"); //count-numbers
    this.countNumbersContainer = document.createElement("div"); //count-numbers container
    this.countNumbersTitle = document.createElement("h1"); //count-numbers title
    this.btn1 = document.createElement("button"); //count-numbers button
    this.btnShadow1 = document.createElement("div"); // count-numbers button shadow
    this.btn1Span = document.createElement("span"); //count-numbers span

    /* Секция Условия игры */

    this.description = document.createElement("section"); //description
    this.descriptionContainer = document.createElement("div"); //description container
    this.descriptionParagraph = document.createElement("p"); // description paragraph
    this.descriptionTitle = document.createElement("h2"); // description title
    this.btn2 = document.createElement("button"); // description button
    this.btnShadow2 = document.createElement("div"); // description button shadow
    this.btn2Span = document.createElement("span"); //description span

    /* Секция Игровое поле */

    this.block = document.createElement("section"); //block
    this.blockСontainer = document.createElement("div"); //block container
    this.blockGame = document.createElement("div"); // block game
    this.blockGameBG = document.createElement("div"); // block game
    this.timerBlockContainer = document.createElement("div"); // block game
    this.timerInfo = document.createElement("div"); // block game
    this.timerCount = document.createElement("div"); // block game
    this.clicksCount = document.createElement("div"); // block game

    /* Секция Результат */

    this.result = document.createElement("section"); //result
    this.resultСontainer = document.createElement("div"); //result container
    this.resultAnswers = document.createElement("div"); //result answers
    this.btn3 = document.createElement("button"); // result button
    this.btnShadow3 = document.createElement("div"); // result button shadow
    this.btn3Span = document.createElement("span"); //result span
    this.btn4 = document.createElement("button"); // result button
    this.btn4Span = document.createElement("span"); //result span
    this.question = document.createElement("div"); //result description
  }

  trigger() {
    addEventContainer(this.type);
    const eventContainer = document.querySelector(`.${this.type}`);
    const isRun = document.querySelector(".timer");
    if (isRun && isRun.textContent === "0") {
      eventContainer.innerHTML = "";
    }

    if (!isRun || eventContainer.innerHTML === "") {
      this.render();
      this.buttonsAnimated();
      this.hideFirst();
      this.hideSecond();
      this.clickCount;
      this.colored();
      this.timer;
      this.gameStart();
      this.resetDom();
      this.repeatGame();
    }
  }

  render() {
    const eventContainer = document.querySelector(`.${this.type}`);
    /* Секция сыграем в игру */
    this.countNumbers.className = "count-numbers";
    this.countNumbersContainer.className = "count-container container";
    this.countNumbersTitle.className = "count-container__title";
    this.countNumbersTitle.textContent = "СЫГРАЕМ В ИГРУ?";
    this.btn1.className = "game";
    this.btnShadow1.className = "game-shadow__one";
    this.btn1Span.className = "game-span";
    this.btn1Span.textContent = "ДА";

    this.btn1.append(this.btn1Span);
    this.countNumbersContainer.append(this.countNumbersTitle, this.btn1, this.btnShadow1);
    this.countNumbers.append(this.countNumbersContainer);

    /* Секция Условия игры */

    this.description.className = "description";
    this.descriptionContainer.className = "container description-container";
    this.descriptionContainer.id = "container";
    this.descriptionParagraph.className = "description__info";
    this.descriptionParagraph.innerHTML = `Твоя задача очень проста: как только ты нажмешь на кнопку, игра запустится, и тебе нужно
    будет кликать в появившийся квадрат. Каждый удачный клик в квадрат будет засчитан, и когда
    игра закончится на экран выведется твой результат. Засчитываются любые клики
    <strong>"ЛЕВОЙ"</strong> кнопки мыши! У тебя будет ровно <strong>ДЕСЯТЬ</strong> СЕКУНД, с
    того момента как ты нажмешь кнопку "Начать".`;
    this.descriptionTitle.className = "description__title";
    this.descriptionTitle.textContent = "ИТАК, ТЫ ГОТОВ?!";
    this.btnShadow2.className = "game-shadow__two";
    this.btn2.className = "game-sub";
    this.btn2Span.className = "game-sub-span";
    this.btn2Span.textContent = "НАЧАТЬ";

    this.btn2.append(this.btn2Span);
    this.descriptionContainer.append(
      this.descriptionParagraph,
      this.descriptionTitle,
      this.btnShadow2,
      this.btn2
    );
    this.description.append(this.descriptionContainer);

    /* Секция Игровое поле */

    this.block.className = "block";
    this.blockСontainer.className = "container block-container";
    this.blockGame.className = "block-game";
    this.blockGameBG.className = "block-game-bg";
    this.timerBlockContainer.className = "timer-block";
    this.timerInfo.className = "info";
    this.timerInfo.innerHTML = "ВРЕМЕНИ ОСТАЛОСЬ:&nbsp";
    this.timerCount.className = "timer";
    this.timerCount.textContent = 10;
    this.clicksCount.className = "clicks";

    this.timerBlockContainer.append(this.timerInfo, this.timerCount);
    this.block.append(this.blockGameBG, this.blockGame, this.timerBlockContainer, this.clicksCount);
    this.block.append(this.blockСontainer);

    /* Секция Результат */

    this.result.className = "result";
    this.resultСontainer.className = "result-container";
    this.resultAnswers.className = "result-answers";
    this.btn3.className = "game-repeat";
    this.btn3.textContent = "ДА";
    this.btn4.className = "game-delete";
    this.btn4.textContent = "НЕТ";
    this.btnShadow3.className = "game-shadow__three";
    this.btn3Span.className = "game-span";
    this.btn4Span.className = "game-span";
    this.question.className = "qiestion";
    this.question.textContent = "Хотите сыграть еще?";

    this.btn3.append(this.btn3Span);
    this.btn4.append(this.btn4Span);
    this.resultAnswers.append(this.btn3, this.btn4, this.btnShadow3);
    this.resultСontainer.append(this.question, this.resultAnswers);
    this.result.append(this.resultСontainer);

    /* Добавляем в DOM */

    eventContainer.append(this.countNumbers, this.description, this.block, this.result);
  }

  /* -----Создаем кнопки и игровое поле----- */

  buttonsAnimated() {
    this.btn1.onmousemove = (e) => {
      const x = e.pageX - this.btn1.offsetLeft;
      const y = e.pageY - this.btn1.offsetTop;
      this.btn1.style.setProperty("--x", x + "px");
      this.btn1.style.setProperty("--y", y + "px");
    };

    this.btn2.onmousemove = (e) => {
      const x = e.pageX - this.btn2.offsetLeft;
      const y = e.pageY - this.btn2.offsetTop;
      this.btn2.style.setProperty("--x", x + "px");
      this.btn2.style.setProperty("--y", y + "px");
    };

    this.blockGame.onmousemove = (e) => {
      const x = e.pageX - this.blockGame.offsetLeft;
      const y = e.pageY - this.blockGame.offsetTop;
      this.blockGame.style.setProperty("--x", x + "px");
      this.blockGame.style.setProperty("--y", y + "px");
    };

    this.btn3.onmousemove = (e) => {
      const x = e.pageX - this.btn3.offsetLeft;
      const y = e.pageY - this.btn3.offsetTop;
      this.btn3.style.setProperty("--x", x + "px");
      this.btn3.style.setProperty("--y", y + "px");
    };

    this.btn4.onmousemove = (e) => {
      const x = e.pageX - this.btn4.offsetLeft;
      const y = e.pageY - this.btn4.offsetTop;
      this.btn4.style.setProperty("--x", x + "px");
      this.btn4.style.setProperty("--y", y + "px");
    };
  }

  /* -----Скрываем контент по клику на кнопки и добавляем новый----- */

  hideFirst() {
    this.btn1.addEventListener("click", () => {
      this.countNumbers.style.display = "none";
      this.description.style.display = "block";
    });
  }

  hideSecond() {
    this.btn2.addEventListener("click", () => {
      this.description.style.display = "none";
      this.block.style.display = "flex";
      this.blockGameBG.style.display = "block";
    });
  }

  /* ----- Функция подсчета кликов ----- */

  clickCount() {
    let click = 0;
    this.clicksCount.style.display = "block";
    this.blockGame.addEventListener("click", () => {
      click += 1;
      this.clicksCount.textContent = `Ваш результат: ${click} кликов`;
    });
    if (click === 0) {
      this.clicksCount.textContent = `Ваш результат: ${click} кликов`;
    }
  }

  /* ----- Функция смены бекграунда при клике ----- */

  colored() {
    this.blockGame.addEventListener("click", () => {
      this.blockGame.style.border = `5px solid ${randomColor()}`;
    });
  }

  /* ----- Функция таймера ----- */

  timer() {
    let secs = this.timerCount.textContent;
    let timer = setInterval(() => {
      this.timerCount.textContent = --secs;
      if (this.timerCount.textContent == 0) {
        clearInterval(timer);
        this.blockGame.style.display = "none";
        this.timerCount.style.display = "none";
        this.timerInfo.style.display = "none";
        this.blockGameBG.style.display = "none";
        this.resultСontainer.style.display = "flex";
        this.result.style.display = "block";
      }
    }, 1000);
  }

  /* ----- Функция reset ----- */

  resetDom() {
    this.btn4.addEventListener("click", () => {
      location.reload();
    });
  }

  /* ----- Функция repeat geme ----- */

  repeatGame() {
    this.btn3.addEventListener("click", () => {
      this.block.style.display = "none";
      this.result.style.display = "none";
      this.clicksCount.style.display = "none";
      this.countNumbers.style.display = "block";
      this.timerCount.textContent = 5;
      this.gameStart();
    });
  }

  /* ----- Функция запускающая игру ----- */

  gameStart() {
    this.clickCount();
    this.btn2.addEventListener("click", () => {
      this.description.style.display = "none";
      this.blockСontainer.style.display = "none";
      this.blockGame.style.display = "inline-flex";
      this.timerInfo.style.display = "block";
      this.timerCount.style.display = "block";
      this.timer();
    });
  }
}
