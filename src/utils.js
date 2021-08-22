"use strict";
// variables
export let counter = -1;
export const timer = 3;

// functions
export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function counterIncrement() {
  counter++;
}

export function refreshCounter() {
  counter = -1;
}

export function addObjectToArea(object) {
  const area = document.querySelector("#area");
  area.append(object);
  setTimeout(() => {
    object.remove();
  }, 3000);
}

export function createArea() {
  const area = document.createElement("div");
  area.classList.add("area");
  area.id = "area";
  document.body.append(area);
}

export function createEl(el, text = "", arrClass = [], data = "") {
  const blockHTML = document.createElement(el);
  blockHTML.textContent = text;
  if (data) {
    blockHTML.setAttribute("data", data);
  }
  if (arrClass.length) {
    blockHTML.classList.add(...arrClass);
  }
  return blockHTML;
}

export function isPalindrome(str) {
  if (!str || str.length < 3) return "empty or short string given";
  return str === str.split("").reverse().join("");
}

export function createModal(modalId) {
  const modal = document.createElement("div");
  modal.id = `${modalId}`;
  modal.style.display = "flex";
  modal.style.flexDirection = "column";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
  modal.style.padding = "15px";
  modal.style.margin = "30% auto";
  modal.style.height = "180px";
  modal.style.width = "38%";
  modal.style.background = "rgba(0, 0, 0, 0.3)";
  modal.style.borderRadius = "10px";
  modal.style.boxShadow = "0px 5px 10px 2px rgba(34, 60, 80, 0.2)";
  modal.style.transition = "all 350ms ease";

  const modalCloseButton = document.createElement("button");
  modalCloseButton.textContent = `\u2716`;
  modalCloseButton.style.cursor = "pointer";
  modalCloseButton.style.display = "block";
  modalCloseButton.style.position = "absolute";
  modalCloseButton.style.left = "70%";
  modalCloseButton.style.top = "30%";
  modalCloseButton.style.fontSize = "15px";
  modalCloseButton.style.borderStyle = "none";
  modalCloseButton.style.background = "none";

  modalCloseButton.addEventListener("click", () => {
    const modal = document.querySelector(`#${modalId}`);
    modal.innerHTML = "";
    modal.remove();
  });

  modal.append(modalCloseButton);
  return modal;
}
export const randomColorRGB = () =>
  `rgb(${random(0, 256)},${random(0, 256)},${random(0, 256)})`;

export function getArea() {
  return document.querySelector("#area");
}
