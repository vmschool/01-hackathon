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

    boxConteiner.style.width = this.#style.width;
    boxConteiner.style.height = this.#style.height;
    boxConteiner.style.position = this.#style.positionFixed;
    boxConteiner.style.left = this.#style.left;
    boxConteiner.style.right = this.#style.right;
    boxConteiner.style.top = this.#style.top;
    boxConteiner.style.bottom = this.#style.bottom;
    boxConteiner.style.transform = "scale()";
    boxConteiner.style.transition = 'transform .3s ease-in-out';

    figureShadow.style.background = "rgb(0, 0, 0, 0.5)";
    figureShadow.style.width = "100%";
    figureShadow.style.height = "100%";
    figureShadow.style.clipPath = this.#style.clipPath;
    figureShadow.style.position = this.#style.positionAbsolute;
    figureShadow.style.left = "10px";
    figureShadow.style.right = "10px";

    figureContent.style.background = this.#style.background;
    figureContent.style.width = this.#style.width;
    figureContent.style.height = this.#style.height;
    figureContent.style.clipPath = this.#style.clipPath;

    this.#getRemoveBoxConteiner(boxConteiner);
    boxConteiner.append(figureShadow, figureContent);
    return this.#bodyHTML.append(boxConteiner);
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
