import { Module } from "../core/module";

export class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    document.body.append(this.#createBlock(), this.#createBtnBlock());
    this.#changeBgColorBlocks();

    setInterval(() => {
      this.#changeBgColorBlocks();
    }, 3000);
  }

  // Создает квадраты
  #createBlock() {
    const block = document.createElement("div");
    block.id = "block";
    block.className = "backgroundModule-block";

    const blockInBlock = document.createElement("div");
    blockInBlock.id = "blockInBlock";
    blockInBlock.className = "backgroundModule-blockInBlock";
    block.append(blockInBlock);

    return block;
  }

  // Создает блок с кнопками смены фона и возврата в меню
  #createBtnBlock() {
    const btnBlock = document.createElement("div");
    btnBlock.className = "backgroundModule-btnBlock";
    btnBlock.id = "#btnBlock";

    const btnChangeBgColor = document.createElement("button");
    btnChangeBgColor.className = "backgroundModule-btnBack";
    btnChangeBgColor.textContent = "Помнять цвет";
    btnChangeBgColor.addEventListener("click", () => {
      this.#changeBgColorBlocks();
    });

    const btnBackToMenu = document.createElement("button");
    btnBackToMenu.className = "backgroundModule-btnBackToMenu";
    btnBackToMenu.textContent = "Вернутся в меню";
    btnBackToMenu.addEventListener("click", () => {
      console.log("btnBackToMenu");
    });

    btnBlock.append(btnChangeBgColor, btnBackToMenu);
    return btnBlock;
  }

  // Логика смены цвета фона
  #changeBgColorBlocks() {
    document.body.style.backgroundColor = this.#getRandomColor();

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
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color.toLowerCase();
  }
}
