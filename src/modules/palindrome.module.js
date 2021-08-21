"use strict";

import { Module } from "../core/module";
import { getArea, isPalindrome } from "../utils";

export class IsPalindromeModule extends Module {
	constructor(type, text) {
		super(type, text);
		this.area = getArea();
		this.inputBlock = document.createElement("div");
	}

	closeWindow() {
		this.inputBlock.innerHTML = "";
		this.inputBlock.remove();
	}

	trigger() {
		if (document.querySelector("#palindrome")) return;

		this.inputBlock.id = "palindrome";
		this.inputBlock.style.display = "flex";
		this.inputBlock.style.height = "180px";
		this.inputBlock.style.width = "38%";
		this.inputBlock.style.padding = "15px";
		this.inputBlock.style.margin = "30% auto";
		this.inputBlock.style.justifyContent = "center";
		this.inputBlock.style.alignItems = "center";
		this.inputBlock.style.flexDirection = "column";
		this.inputBlock.style.background = "rgba(0, 0, 0, 0.3)";
		this.inputBlock.style.borderRadius = "10px";
		this.inputBlock.style.boxShadow = "0px 5px 10px 2px rgba(34, 60, 80, 0.2)";
		this.inputBlock.style.transition = "all 350ms ease";

		const form = document.createElement("form");
		form.type = "palindrome-form";
		form.style.display = "flex";
		form.style.marginTop = "25px";
		form.style.flexDirection = "column";
		form.style.alignItems = "center";

		const input = document.createElement("input");
		input.className = "palindrome-input";
		input.type = "text";
		input.style.padding = "5px";
		input.style.height = "30px";
		input.style.background = "rgba(255, 255, 255, 0.5)";
		input.style.borderRadius = "4px";
		input.style.borderStyle = "none";

		const inputBlockTitle = document.createElement("h1");
		inputBlockTitle.textContent = `Является ли строка палиндромом?`;
		inputBlockTitle.style.height = "35px";
		inputBlockTitle.style.textAlign = "center";
		inputBlockTitle.style.fontSize = "15px";
		inputBlockTitle.style.color = "rgba(255, 255, 255, 0.8)";
		inputBlockTitle.style.fontFamily = "Lato, sans-serif";
		inputBlockTitle.style.fontWeight = "600";
		inputBlockTitle.style.letterSpacing = "1px";

		const checkButton = document.createElement("input");
		checkButton.className = "palindrome-check-button";
		checkButton.type = "submit";
		checkButton.value = "Проверить";
		checkButton.style.marginTop = "15px";
		checkButton.style.height = "35px";
		checkButton.style.width = "140px";
		checkButton.style.borderStyle = "none";
		checkButton.style.borderRadius = "5px";
		checkButton.style.background = "rgba(255, 0, 0, 0.45)";
		checkButton.style.color = "rgba(255, 255, 255, 0.8)";
		checkButton.style.transition = "background 150ms ease";
		checkButton.style.cursor = "pointer";

		const closeButton = document.createElement("button");
		closeButton.textContent = `\u2716`;
		closeButton.style.cursor = "pointer";
		closeButton.style.display = "block";
		closeButton.style.position = "absolute";
		closeButton.style.left = "70%";
		closeButton.style.top = "30%";
		closeButton.style.fontSize = "15px";
		closeButton.style.borderStyle = "none";
		closeButton.style.background = "none";

		closeButton.addEventListener("click", this.closeWindow.bind(this));

		checkButton.addEventListener(
			"mouseover",
			() => (checkButton.style.background = "rgba(255, 0, 0, 0.7)")
		);
		checkButton.addEventListener(
			"mouseleave",
			() => (checkButton.style.background = "rgba(255, 0, 0, 0.45)")
		);

		form.addEventListener("submit", (event) => {
			event.preventDefault();
			const inputField = document.querySelector(".palindrome-input");

			switch (isPalindrome(inputField.value)) {
				case true: {
					this.inputBlock.style.background = "rgba(11, 156, 49, 0.6)";
					inputBlockTitle.style.paddingTop = "10px";
					inputBlockTitle.textContent = "Это палиндром!";
					setTimeout(() => {
						this.inputBlock.style.background = "rgba(0, 0, 0, 0.3)";
						inputBlockTitle.style.paddingTop = "0";
						inputBlockTitle.textContent = "Является ли строка палиндромом?";
					}, 2000);
					break;
				}
				case false: {
					this.inputBlock.style.background = "rgba(255, 0, 0, 0.4)";
					inputBlockTitle.style.paddingTop = "10px";
					inputBlockTitle.textContent = "Не палиндром!";
					setTimeout(() => {
						this.inputBlock.style.background = "rgba(0, 0, 0, 0.3)";
						inputBlockTitle.style.paddingTop = "0";
						inputBlockTitle.textContent = "Является ли строка палиндромом?";
					}, 2000);
					break;
				}
				case "empty or short string given": {
					inputBlockTitle.textContent = "Введите слово длинее 3-х символов.";
					break;
				}
			}

			inputField.value = "";
		});

		form.append(input, checkButton, closeButton);
		this.inputBlock.append(inputBlockTitle, form);
		this.area.append(this.inputBlock);
	}
}
