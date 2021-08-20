"use strict";

import { Menu } from "./core/menu";

export default class ContextMenu extends Menu {
	constructor(selector) {
		super(selector);
		this.menuItem = document.querySelector(".menu");
		// в modules ниже вставлять импортированные модули
		this.modules = [1, 2, 3];
	}

	addModule(module) {
		const menuItem = document.createElement("li");
		menuItem.className = "menu-item";
		menuItem.textContent = `Модуль "${module}"`;

		// Закомментил, т.к. пока нет модулей выдает ошибку :)
		//menuItem.addEventListener("click", module.trigger());

		this.menuItem.insertAdjacentElement("beforeend", menuItem);
	}

	open() {
		event.preventDefault();
		this.menuItem.innerHTML = "";

		this.modules.forEach((module) => this.addModule(module));

		this.menuItem.style.top = `${event.clientY}px`;
		this.menuItem.style.left = `${event.clientX}px`;
		this.menuItem.classList.add("open");
	}

	close() {
		this.menuItem.classList.remove("open");
	}
}
