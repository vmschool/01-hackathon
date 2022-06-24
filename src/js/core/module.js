export default class Module {
  constructor(type, text) {
    if (!type) {
      throw new Error('Please specify "type" param');
    }
    if (!text) {
      throw new Error('Please specify "text" param');
    }
    this.type = type;
    this.text = text;

    this.el = document.createElement('li');
    this.el.classList.add('menu-item');
    this.el.dataset.type = this.type;
    this.el.textContent = this.text;
  }

  trigger() {
    throw new Error(`Trigger method should be implemented in module "${this.type}"`);
  }

  get element() {
    return this.el;
  }
}
