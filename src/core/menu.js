export class Menu {
  constructor(selector) {
    this.el = document.querySelector(selector);

    document.body.addEventListener('click', (event) => {
      if (event.target.offsetParent !== this.el) {
        this.close();
      }
    });
  }

  open() {
    this.el.classList.add('open');
    // throw new Error(`"open" method should be implemented in Menu"`);
  }

  close() {
    this.el.classList.remove('open');
    // throw new Error(`"close" method should be implemented in Menu"`);
  }

  add(menuInnerHTML = '') {
    this.el.innerHTML = menuInnerHTML;
  }
  // throw new Error(`"add" method should be implemented in Menu"`);
}
