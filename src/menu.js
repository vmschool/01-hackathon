"use strict";

import { Menu } from "./core/menu";
import {getArea} from "@/utils";

export default class ContextMenu extends Menu {
	constructor(selector) {
		super(selector);
		this.modules = [];
	}

	add(module) {
		this.el.insertAdjacentHTML('afterbegin', module.toHTML());
		const elem = this.el.querySelector('.menu-item');
		elem.addEventListener('click', () => {
			const area = getArea()
			area.innerHTML = ``;
			module.trigger();
		})
	}

	open(event) {
		event.preventDefault();
		this.el.style.top = `${event.clientY}px`;
		this.el.style.left = `${event.clientX}px`;
		this.el.classList.add("open");
	}

	close() {
		this.el.classList.remove("open");
	}
}
