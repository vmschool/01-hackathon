export class Menu {
  constructor(selector) {
    this.state = 0;
    this.el = document.querySelector(selector);
    document.body.addEventListener('click', (event) => {
      if (event.target.offsetParent !== this.el) {
        this.close();
      }
    });
  }

  open() {
    this.el.classList.add('open');
  }

  close() {
    this.el.classList.remove('open');
  }

  add() {
    throw new Error(`"add" method should be implemented in Menu"`);
  }
}
