"use strict";

import { Module } from "../core/module";
import { getArea, isPalindrome, createModal } from "../utils";

export class IsPalindromeModule extends Module {
	#area;
	#modal;
	#form;
	#titleField;
	#colors;

	constructor(type, text) {
		super(type, text);
		this.#area = document.querySelector(".area");
		this.#modal = createModal("palindrome");
		this.#form = document.createElement("form");
		this.#titleField = document.createElement("h1");
		this.#colors = {
			default: `rgba(0, 0, 0, 0.3)`,
			true: `rgba(11, 156, 49, 0.6)`,
			false: `rgba(255, 0, 0, 0.4)`,
		};
	}

	#createPalindromeMarkup() {
		this.#modal = createModal("palindrome");

		this.#titleField.textContent = `Given input is a Palindrome?`;
		this.#titleField.style.height = "35px";
		this.#titleField.style.textAlign = "center";
		this.#titleField.style.fontSize = "15px";
		this.#titleField.style.color = "rgba(255, 255, 255, 0.8)";
		this.#titleField.style.fontFamily = "Lato, sans-serif";
		this.#titleField.style.fontWeight = "600";
		this.#titleField.style.letterSpacing = "1px";

		this.#form.type = "palindrome-form";
		this.#form.style.display = "flex";
		this.#form.style.marginTop = "25px";
		this.#form.style.flexDirection = "column";
		this.#form.style.alignItems = "center";

		const input = document.createElement("input");
		input.className = "palindrome-input";
		input.type = "text";
		input.style.padding = "5px";
		input.style.height = "30px";
		input.style.background = "rgba(255, 255, 255, 0.5)";
		input.style.borderRadius = "4px";
		input.style.borderStyle = "none";

		const checkButton = document.createElement("input");
		checkButton.className = "palindrome-check-button";
		checkButton.type = "submit";
		checkButton.value = "Check";
		checkButton.style.marginTop = "15px";
		checkButton.style.height = "35px";
		checkButton.style.width = "140px";
		checkButton.style.borderStyle = "none";
		checkButton.style.borderRadius = "5px";
		checkButton.style.background = "rgba(255, 0, 0, 0.45)";
		checkButton.style.color = "rgba(255, 255, 255, 0.8)";
		checkButton.style.transition = "background 150ms ease";
		checkButton.style.cursor = "pointer";

		checkButton.addEventListener(
			"mouseover",
			() => (checkButton.style.background = "rgba(255, 0, 0, 0.7)")
		);
		checkButton.addEventListener(
			"mouseleave",
			() => (checkButton.style.background = "rgba(255, 0, 0, 0.45)")
		);

		this.#form.append(input, checkButton);
	}

	#changeBackgroundColorAndTitle(color, title, padding) {
		this.#modal.style.background = `${color}`;
		this.#titleField.style.paddingTop = `${padding}px`;
		this.#titleField.textContent = `${title}`;
	}

	#checkInput(input) {
		switch (isPalindrome(input)) {
			case true: {
				this.#changeBackgroundColorAndTitle(
					this.#colors.true,
					"Это палиндром!",
					10
				);
				setTimeout(() => {
					this.#changeBackgroundColorAndTitle(
						this.#colors.default,
						"Является ли строка палиндромом?",
						0
					);
				}, 1500);
				break;
			}
			case false: {
				this.#changeBackgroundColorAndTitle(
					this.#colors.false,
					"Не палиндром!",
					10
				);
				setTimeout(() => {
					this.#changeBackgroundColorAndTitle(
						this.#colors.default,
						"Является ли строка палиндромом?",
						0
					);
				}, 1500);
				break;
			}
			case "empty or short string given": {
				this.#changeBackgroundColorAndTitle(
					this.#colors.default,
					"Введите слово длинее 3-х символов.",
					0
				);
				setTimeout(() => {
					this.#changeBackgroundColorAndTitle(
						this.#colors.default,
						"Является ли строка палиндромом?",
						0
					);
				}, 1500);
				break;
			}
		}
	}

	#reset() {
		this.#modal.innerHTML = "";
		this.#form.innerHTML = "";
		this.#titleField.innerHTML = "";
	}

	trigger() {
		if (document.querySelector("#palindrome")) return;

		this.#reset();
		this.#createPalindromeMarkup();

		this.#form.addEventListener("submit", (event) => {
			event.preventDefault();
			const inputField = document.querySelector(".palindrome-input");
			this.#checkInput(inputField.value);
			inputField.value = "";
			this.#titleField.value = "";
		});

		this.#modal.append(this.#titleField, this.#form);
		this.#area.append(this.#modal);
	}
}
