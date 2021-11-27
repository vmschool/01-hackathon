import { random } from "../../utils";
const bodyHTML = document.querySelector("body");

function changeColorFigure() {
  const color = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
  return color;
}

function createElement() {
  const { width, height } = bodyHTML.getBoundingClientRect();
  const sizeMain = random(50, 200);
  return {
    size: sizeMain,
    x: random(0, width - sizeMain),
    y: random(0, height - sizeMain),
  };
}

function createRamdomCircule() {
  const circle = document.createElement("div");
  circle.className = "figure-root circle";
  circle.style.position = "absolute";
  circle.style.width = `${createElement().size}px`;
  circle.style.height = `${createElement().size}px`;
  circle.style.background = changeColorFigure();
  circle.style.borderRadius = `${50}%`;
  circle.style.top = `${createElement().y}px`;
  circle.style.left = `${createElement().x}px`;
  bodyHTML.append(circle);
}

function createRamdomRect() {
  const rect = document.createElement("div");
  rect.style.position = "absolute";
  rect.className = "figure-root rect";
  rect.style.width = `${createElement().size}px`;
  rect.style.height = `${createElement().size}px`;
  rect.style.background = changeColorFigure();
  rect.style.top = `${createElement().y}px`;
  rect.style.left = `${createElement().x}px`;
  bodyHTML.append(rect);
}

function createRamdomTriangleUp() {
  const triangle = document.createElement("div");
  triangle.className = "figure-root triangle";
  triangle.style.position = "absolute";
  triangle.style.width = 0;
  triangle.style.height = 0;
  triangle.style.borderLeft = `${createElement().size}px solid transparent`;
  triangle.style.borderRight = `${createElement().size}px solid transparent`;
  triangle.style.borderBottom = `${
    createElement().size
  }px solid ${changeColorFigure()}`;
  triangle.style.top = `${createElement().y}px`;
  triangle.style.left = `${createElement().x}px`;
  bodyHTML.append(triangle);
}
function createRamdomTriangleDown() {
  const triangleD = document.createElement("div");
  triangleD.className = "figure-root triangleD";
  triangleD.style.position = "absolute";
  triangleD.style.width = 0;
  triangleD.style.height = 0;
  triangleD.style.borderLeft = `${createElement().size}px solid transparent`;
  triangleD.style.borderRight = `${createElement().size}px solid transparent`;
  triangleD.style.borderTop = `${
    createElement().size
  }px solid ${changeColorFigure()}`;

  triangleD.style.top = `${createElement().y}px`;
  triangleD.style.left = `${createElement().x}px`;
  bodyHTML.append(triangleD);
}
function createRamdomParallelogram() {
  const parallelogram = document.createElement("div");
  parallelogram.className = "figure-root parallelogram";
  parallelogram.style.position = "absolute";
  parallelogram.style.width = `${createElement().size}px`;
  parallelogram.style.height = `${createElement().size}px`;
  parallelogram.style.background = changeColorFigure();
  parallelogram.style.transform = `skew(${random(1, 50)}deg)`;
  parallelogram.style.top = `${createElement().y}px`;
  parallelogram.style.left = `${createElement().x}px`;
  bodyHTML.append(parallelogram);
}

export const figuresCreatedFunctions = [
  createRamdomCircule,
  createRamdomRect,
  createRamdomTriangleUp,
  createRamdomTriangleDown,
  createRamdomParallelogram,
];
