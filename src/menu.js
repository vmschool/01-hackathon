import { Menu } from "./core/menu";
import * as Utils from "./utils";
export class ContextMenu extends Menu {
  #elementsMenu;

  constructor(selector) {
    super(selector);
    this.#elementsMenu = [];
  }

  #cleanBody() {
    document.body.innerHTML = ``
    document.body.append(Utils.MENU);
    Utils.clearAllIntervals();
  }

  open(positionX, positionY) {  
    Utils.MENU.classList.add("open");
    const contextMenuHeight = Utils.MENU.offsetHeight;

    positionX + 150 >= Utils.DOCUMENT_WIDTH()
      ? (Utils.MENU.style.left = `${Utils.DOCUMENT_WIDTH() - 150}px`)
      : (Utils.MENU.style.left = `${positionX}px`);

    positionY + contextMenuHeight >= Utils.DOCUMENT_HEIGHT()
      ? (Utils.MENU.style.top = `${
        Utils.DOCUMENT_HEIGHT() - contextMenuHeight
        }px`)
      : (Utils.MENU.style.top = `${positionY}px`);
  }

  close() {
    Utils.MENU.classList.remove("open");
  }

  add(element) {
    Utils.MENU.insertAdjacentHTML("beforeend", element.toHTML());
    this.#elementsMenu.push(element);
  }

  startElementTriger(eventType) {
    const element = this.#elementsMenu.find(
      (element) => element.type === eventType
    );
    this.#cleanBody();
    this.close();
    element.trigger();
  }
}
