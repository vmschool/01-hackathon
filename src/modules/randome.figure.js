import { Module } from "../core/module";
import * as Utils from "../utils";

export class RandomFigure extends Module {
  #bodyHTML;
  #style;

  constructor() {
    super("randomFigure", "Создать фигуру");

    this.#bodyHTML = document.querySelector("body");
    this.#style = null;
  }

  trigger() {
    this.#render();
  }

  #render() {
    this.#style = {
      background: Utils.randomColor(),
      width: `${Utils.random(200, 400)}px`,
      height: `${Utils.random(200, 400)}px`,
      clipPath: `${this.#randomClipPath()}`,
      positionAbsolute: "absolute",
      positionFixed: "fixed",
      left: `${Utils.random(0, 80)}%`,
      right: `${Utils.random(0, 80)}%`,
      top: `${Utils.random(0, 80)}%`,
      bottom: `${Utils.random(0, 80)}%`,
    };

    const boxConteiner = document.createElement("div");
    const figureContent = document.createElement("div");
    const figureShadow = document.createElement("div");

    boxConteiner.id = "box-conteiner";
    figureContent.id = "figure-content";
    figureShadow.id = "figure-shadow";

    this.#randomStyles(this.#style, boxConteiner, figureContent, figureShadow);
    this.#styles(boxConteiner, figureShadow);
    this.#getRemoveBoxConteiner(boxConteiner);

    boxConteiner.append(figureShadow, figureContent);
    return this.#bodyHTML.append(boxConteiner);
  }

  #styles(boxConteiner, figureShadow) {
    boxConteiner.style.transform = "scale(0)";
    boxConteiner.style.transition = "transform .3s ease-in-out";
    boxConteiner.classList.add("show");
    if (boxConteiner.className === "show") {
      setTimeout(() => (boxConteiner.style.transform = "scale(1)"));
    }

    figureShadow.style.background = "rgb(0, 0, 0, 0.7)";
    figureShadow.style.width = "100%";
    figureShadow.style.height = "100%";
    figureShadow.style.left = "10px";
    figureShadow.style.right = "10px";
  }

  #randomStyles(data, boxConteiner, figureContent, figureShadow) {
    boxConteiner.style.width = data.width;
    boxConteiner.style.height = data.height;
    boxConteiner.style.position = data.positionFixed;
    boxConteiner.style.left = data.left;
    boxConteiner.style.right = data.right;
    boxConteiner.style.top = data.top;
    boxConteiner.style.bottom = data.bottom;

    figureShadow.style.clipPath = data.clipPath;
    figureShadow.style.position = data.positionAbsolute;

    figureContent.style.background = data.background;
    figureContent.style.width = data.width;
    figureContent.style.height = data.height;
    figureContent.style.clipPath = data.clipPath;
  }

  #getRemoveBoxConteiner(boxConteiner) {
    setTimeout(() => {
      boxConteiner.style.transform = "scale(0)";
    }, 8000);
    setTimeout(() => {
      boxConteiner.remove();
    }, 8500);
  }

  #randomClipPath() {
    let value = "";
    for (let i = 0; i < 8; i++) {
      value += `${Utils.random(0, 100)}% ${Utils.random(10, 80)}%,`;
    }
    value = value.slice(0, -1);
    const polygon = `polygon(${value})`;
    return polygon;
  }
}
