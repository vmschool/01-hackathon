import { Module } from "../core/module";
import { getArea, isPalindrome, createModal } from "../utils";

export default class IsPalindromeModule extends Module {
	#area;
	#modal;
	#form;
	#titleField;
	#colors;

	constructor(type, text) {
		super(type, text);
		this.#area = getArea();
		this.#modal = createModal("palindrome");
		this.#form = document.createElement("form");
		this.#titleField = document.createElement("h1");
		this.#colors = {
			default: `rgba(0, 0, 0, 0.3)`,
			true: `rgba(11, 156, 49, 0.6)`,
			false: `rgba(255, 0, 0, 0.4)`,
		};
		this.#initiateListener();
	}

	#createPalindromeMarkup() {
		this.#modal = createModal("palindrome");

		this.#titleField.className = "titleFieldPalindrome";
		this.#titleField.textContent = `Given input is a Palindrome? Length is more than 2 characters`;

		this.#form.className = "palindrome-form";

		const input = document.createElement("input");
		input.className = "palindrome-input";
		input.type = "text";

		const checkButton = document.createElement("input");
		checkButton.className = "palindrome-check-button";
		checkButton.type = "submit";
		checkButton.value = "Check";

		this.#form.append(input, checkButton);
	}

	#changeBackgroundColorAndTitle(color, title, padding) {
		this.#modal.style.background = `${color}`;
		this.#titleField.style.paddingTop = `${padding}px`;
		this.#titleField.textContent = `${title}`;
	}

	#returnToStartWindow() {
		setTimeout(() => {
			this.#changeBackgroundColorAndTitle(
				this.#colors.default,
				"Given input is a Palindrome? Length is more than 2 characters",
				0
			);
		}, 1500);
	}

	#checkInput(input) {
		switch (isPalindrome(input)) {
			case true: {
				this.#changeBackgroundColorAndTitle(
					this.#colors.true,
					"Yes! Palindrome!",
					10
				);
				this.#returnToStartWindow();
				break;
			}
			case false: {
				this.#changeBackgroundColorAndTitle(
					this.#colors.false,
					"No! It's not.",
					10
				);
				this.#returnToStartWindow();
				break;
			}
			case "empty or short string given": {
				this.#changeBackgroundColorAndTitle(
					this.#colors.default,
					"Please, enter valid input",
					0
				);
				this.#returnToStartWindow();
				break;
			}
		}
	}

	#reset() {
		this.#modal.innerHTML = "";
		this.#form.innerHTML = "";
		this.#titleField.innerHTML = "";
	}

	#initiateListener() {
		this.#form.addEventListener("submit", (event) => {
			event.preventDefault();
			const inputField = document.querySelector(".palindrome-input");
			this.#checkInput(inputField.value.toLowerCase());
			inputField.value = "";
			this.#titleField.value = "";
		});
	}

	trigger() {
		if (document.querySelector("#palindrome")) return;
		this.#reset();
		this.#createPalindromeMarkup();
		this.#modal.append(this.#titleField, this.#form);
		this.#area.append(this.#modal);
	}
}
