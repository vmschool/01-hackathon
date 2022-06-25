import "./styles.css";

import { ContextMenu } from "./menu";
// import { TimerModule } from "./modules/timer.module";
import { ClicksModule } from "./modules/clicks.module";

const contextMenu = new ContextMenu("ul");
// const timerModule = new TimerModule("timer", "Обратный отсчёт");
const clicks = new ClicksModule("clicker", "Счетчик сликов");
contextMenu.add(timerModule);

document.body.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  let elemX = document.elementFromPoint(event.clientX + 150, event.clientY);
  let elemY = document.elementFromPoint(event.clientX, event.clientY + 50);
  elemX === null
    ? (contextMenu.el.style.left = `${event.clientX - 150}px`)
    : (contextMenu.el.style.left = `${event.clientX}px`);
  elemY === null
    ? (contextMenu.el.style.top = `${event.clientY - 50}px`)
    : (contextMenu.el.style.top = `${event.clientY}px`);
  contextMenu.open();
});
