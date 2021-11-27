import { Module } from "../core/module";
import { random } from "../utils";

export class ShapeModule extends Module {
  constructor() {
    super("shape-module", "Произвольная фигура");
    this.width = 100;
    this.height = 100;
    this.color = "blue";
  }

  changePlaceFigure() {
    return {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    };
  }

  changeColorFigure() {
    this.color = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
    return this.color;
  }

  render() {
    const bodyHTML = document.querySelector("body");
    const figureRootDiv = document.createElement("div");
    figureRootDiv.className = "figure-root";
    figureRootDiv.style.position = "absolute";
    console.log(random(0, this.changePlaceFigure().windowHeight));
    figureRootDiv.style.top =
      random(0, this.changePlaceFigure().windowHeight) + "px";
    figureRootDiv.style.left =
      random(0, this.changePlaceFigure().windowWidth) + "px";
    figureRootDiv.style.width = this.width + "px";
    figureRootDiv.style.height = this.height + "px";
    figureRootDiv.style.backgroundColor = this.changeColorFigure();
    bodyHTML.append(figureRootDiv);
  }
  addFigure() {
    const figureToHTML = document.querySelector("#menu");
    figureToHTML.addEventListener("click", (event) => {
      const isShapeModule = event.target.closest("[data-type='shape-module']");
      if (isShapeModule) {
        this.render();
        setTimeout(() => {
          document.querySelector(".figure-root").remove();
        }, 5000);
      }
    });
  }
}
