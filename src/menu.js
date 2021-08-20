"use strict";

import { Menu } from "./core/menu";

export default class ContextMenu extends Menu {
	constructor(selector) {
		super(selector);
		this.menuItem = document.querySelector(".menu");
		this.modules = [];
	}

	addModule(module) {
		this.modules.push(module);
	}

	open() {
		event.preventDefault();
		this.menuItem.innerHTML = "";

		this.modules.forEach((module) => {
			this.menuItem.insertAdjacentHTML("beforeend", module.toHTML());
		});

		this.menuItem.style.top = `${event.clientY}px`;
		this.menuItem.style.left = `${event.clientX}px`;
		this.menuItem.classList.add("open");
	}

	close() {
		this.menuItem.classList.remove("open");
	}
}
