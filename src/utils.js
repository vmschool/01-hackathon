"use strict";
// variables
export let counter = -1;
export const timer = 3;
export const WEATHER_API_URL =
  "http://api.openweathermap.org/data/2.5/weather?q=";
export const WEATHER_API_KEY = "fe57b721fd47b8600afac45a7829c1ea";

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

export function showError(err) {
  console.error(err)
}
