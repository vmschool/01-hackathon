"use strict";

import "./styles.css";
import ContextMenu from "./menu";

const contextMenu = new ContextMenu();

document.body.addEventListener("contextmenu", (event) => {
	contextMenu.open(event);
});

document.body.addEventListener("click", (event) => {
	contextMenu.close(event);
});
