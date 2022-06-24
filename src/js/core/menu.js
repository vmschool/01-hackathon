/* eslint no-unused-vars: "off" */

export default class Menu {
  constructor() {
    this.el = document.createElement('ul');

    document.body.addEventListener('click', (event) => {
      if (event.target.offsetParent !== this.el) {
        this.close();
      }
    });
  }

  setPosition(top, left) {
    throw new Error('"setPosition" method should be implemented in Menu"');
  }

  get isOpen() {
    throw new Error('"isOpen" method should be implemented in Menu"');
  }

  open() {
    throw new Error('"open" method should be implemented in Menu"');
  }

  close() {
    throw new Error('"close" method should be implemented in Menu"');
  }

  add() {
    throw new Error('"add" method should be implemented in Menu"');
  }

  render() {
    throw new Error('"render" method should be implemented in Menu"');
  }
}
