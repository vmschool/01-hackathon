"use strict";

import { Menu } from "./core/menu";

export default class ContextMenu extends Menu {
	constructor(selector) {
		super(selector);
		this.modules = [];
	}

	add(module) {
		this.modules.push(module);
	}

	open(event) {
		event.preventDefault();
		this.el.innerHTML = "";

		this.modules.forEach((module) => {
			this.el.insertAdjacentHTML("beforeend", module.toHTML());
		});

		this.el.style.top = `${event.clientY}px`;
		this.el.style.left = `${event.clientX}px`;
		this.el.classList.add("open");
	}

	close() {
		this.el.classList.remove("open");
	}
}
