import {Menu} from './core/menu'
import { BackgroundModule } from './modules/background.module';

class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
  }
  
  open(event) {
    const { clientX: cursorX, clientY: cursorY } = event;

    this.el.style.top = `${cursorY}px`;
    this.el.style.left = `${cursorX}px`;

    [...this.el.children].forEach((element, index) => {
      this.el.children[index].style.transform = "rotateY(0deg) rotateX(0deg)";
      this.el.children[index].style.webkitTransform =
        " rotateY(0deg) rotateX(0deg)";
    });

    this.el.onclick = () => this.close();

    this.el.classList.add("open");
  }
  close() {
    [...this.el.children].forEach((element, index) => {
      this.el.children[index].style.transform = "rotateY(90deg) rotateX(45deg)";
      this.el.children[index].style.webkitTransform =
        "rotateY(90deg) rotateX(45deg)";
    });
    this.el.classList.remove("open");
  }

  add(instanceofModule) {
    this.el.insertAdjacentHTML('afterbegin', instanceofModule.toHTML()) 
  }
}

export default ContextMenu;
