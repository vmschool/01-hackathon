import { Module } from "../core/module";
import { random } from "../utils";
import {figuresCreatedFunctions} from "../core/components/createShapeFunction";

export class ShapeModule extends Module {

  constructor() {
    super("shape-module", "Произвольная фигура");
  }

  #render() {
    figuresCreatedFunctions[random(0, figuresCreatedFunctions.length - 1)]();
  }
  addFigure() {
    const figureToHTML = document.querySelector("#menu");
    figureToHTML.addEventListener("click", (event) => {
      const isShapeModule = event.target.closest("[data-type='shape-module']");
      if (isShapeModule) {
        this.#render();
        setTimeout(() => {
          document.querySelector(".figure-root").remove();
        }, random(1000, 5000));
      }
    });
  }
}
