import { Menu } from './core/menu';
import {positionMenu} from './utils'

export const getTamplate = (data = []) => {
  const items = data.map((item) => {
    return `
<li class="menu-item" data-id="${item.id}">${item.value}</li>
`;
  });

  return items.join('');
};

export class ContextMenu extends Menu {
  constructor(selector, options) {
    super(selector);
    this.state = 0;
    this.options = options;
    this.#render();
    this.#contextmenuOpen();
    this.#contextItemOpen();

    // this.#contextMenuClose();
  }

  #render() {
    const { data } = this.options;
    console.log(this.options);
    this.el.innerHTML = getTamplate(data);
  }

  #contextmenuOpen() {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      this.state = 1;
      this.open();

      

      //       // toggleMenu();
      positionMenu(e);
    });
  }

  #contextItemOpen() {
    this.el.addEventListener('click', (e) => {
      const target = e.target.dataset;
      const id = target.id;
      console.log(this.options.data);
      this.options.data.forEach((item) => {
        if (id === item.id) {
          item.func();
        }
      });
    });
  }
}

// #contextMenuClose() {
//   document.addEventListener('click', (e) => {
//     if (this.state === 1) {
//       this.close();
//       this.state = 0;
//     }
//   });
// }
