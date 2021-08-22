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

export function addObjectToArea(object, ms = 3000) {
  const area = document.querySelector("#area");
  area.append(object);
  setTimeout(() => {
    object.remove();
  }, ms);
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
  blockHTML.setAttribute("data", data);
  blockHTML.classList.add(...arrClass);
  return blockHTML;
}

export function isPalindrome(str) {
  if (!str || str.length < 3) return "empty or short string given";
  return str === str.split("").reverse().join("");
}

export function createModal(modalId) {
  const modal = document.createElement("div");
  modal.id = `${modalId}`;
  modal.classList.add("modal");

  const modalCloseButton = document.createElement("button");
  modalCloseButton.classList.add("modal_close-button");
  modalCloseButton.textContent = `\u2716`;

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
