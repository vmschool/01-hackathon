import { Module } from "../core/module";
import * as Utils from "../utils";

export class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    document.body.append(this.#createBlock(), this.#createBtnBlock());
    this.#changeBgColorBlocks();

    const changeBgColorIntervalId = setInterval(() => {
      this.#changeBgColorBlocks();
    }, 5000);
    Utils.allIntervals.push(changeBgColorIntervalId);
  }

  // Создает квадраты
  #createBlock() {
    const container = document.createElement("div");
    container.id = "container";
    container.className = "backgroundModule-container";

    const block = document.createElement("div");
    block.id = "block";
    block.className = "backgroundModule-block";
    container.append(block);

    const blockInBlock = document.createElement("div");
    blockInBlock.id = "blockInBlock";
    blockInBlock.className = "backgroundModule-blockInBlock";
    block.append(blockInBlock);

    return container;
  }

  // Создает блок с кнопками смены фона и возврата в меню
  #createBtnBlock() {
    const btnChangeBgColor = document.createElement("button");
    btnChangeBgColor.className = "backgroundModule-btnBack";
    btnChangeBgColor.textContent = "Помeнять цвет";
    btnChangeBgColor.addEventListener("click", () => {
      this.#changeBgColorBlocks();
    });

    return btnChangeBgColor;
  }

  // Логика смены цвета фона
  #changeBgColorBlocks() {
    document.querySelector("#container").style.backgroundColor =
      this.#getRandomColor();

    document.querySelector("#block").style.backgroundColor =
      this.#getRandomColor();

    document.querySelector("#blockInBlock").style.backgroundColor =
      this.#getRandomColor();
  }

  // Генерирует случайный цвет
  #getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Utils.random(0, letters.length - 1)]; 
    }
    
    return color;
  }
}
