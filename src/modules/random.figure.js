import { Module } from "../core/module";

export class RandomFigure extends Module {
  #style;
  #bodyHTML;
  #boxConteiner;
  #figureContent;
  #figureShadow;

  constructor() {
    super('random-figure', 'Создать фигуру');

    this.#style = {
      background: this.#randomColor(),
      width: `${this.#getRandom()}px`,
      height: `${this.#getRandom()}px`,
      clipPath: `${this.#randomClipPath()}`,
      positionRelative: "revative",
      positionAbsolute: "absolute",
      positionFixed: "fixed",
      left: `${this.#getRandom(0, 80)}%`,
      right: `${this.#getRandom(0, 80)}%`,
    };

    this.#bodyHTML = document.querySelector("body");
    this.#boxConteiner = document.createElement("div");
    this.#figureContent = document.createElement("div");
    this.#figureShadow = document.createElement("div");

    this.#boxConteiner.id = "box-conteiner";
    this.#figureContent.id = "figureContent";
    this.#figureShadow.id = "figureShadow";
  }

  trigger() {
    this.#render();
  }

  #render() {
    this.#boxConteiner.style.width = this.#style.width;
    this.#boxConteiner.style.height = this.#style.height;
    this.#boxConteiner.style.position = this.#style.positionFixed;
    this.#boxConteiner.style.left = this.#style.left;
    this.#boxConteiner.style.right = this.#style.right;

    this.#figureShadow.style.background = "rgb(0, 0, 0, 0.5)";
    this.#figureShadow.style.width = "100%";
    this.#figureShadow.style.height = "100%";
    this.#figureShadow.style.clipPath = this.#style.clipPath;
    this.#figureShadow.style.position = this.#style.positionAbsolute;
    this.#figureShadow.style.left = "10px";
    this.#figureShadow.style.right = "10px";

    this.#figureContent.style.background = this.#style.background;
    this.#figureContent.style.width = this.#style.width;
    this.#figureContent.style.height = this.#style.height;
    this.#figureContent.style.clipPath = this.#style.clipPath;

    this.#getRemoveBoxConteiner();
    this.#boxConteiner.append(this.#figureShadow, this.#figureContent);
    return this.#bodyHTML.append(this.#boxConteiner);
  }

  #getRemoveBoxConteiner() {
    setTimeout(() => {
      this.#boxConteiner.style.transform = "scale(0)";
    }, 10000);
    setTimeout(() => {
      this.#boxConteiner.remove();
    }, 10500);
  }

  #getRandom(min = 200, max = 400) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  #randomClipPath() {
    let value = "";
    for (let i = 0; i < 8; i++) {
      value += `${this.#getRandom(0, 100)}% ${this.#getRandom(10, 80)}%,`;
    }
    value = value.slice(0, -1);
    const polygon = `polygon(${value})`;
    return polygon;
  }

  #randomColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i <= 5; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    return hexColor;
  }
}
