import { Module } from '../core/module';

export class CalculatorModule extends Module {
  #root;
  #el;

  constructor(type, text) {
    super(type, text);
    this.#root = document.body;
    this.#el = document.createElement('div');
    this.#el.dataset.type = this.type;
    this.#el.className = `module-${ this.type }`;

    this.#root.addEventListener('click', (event) => {
      if (event.target.dataset.type !== 'calculator') {
        this.close();
      }
    });

    this.#root.addEventListener('contextmenu', (event) => {
      this.close();
    });
  }


  trigger() {
    const input = document.createElement('input');
    input.className = 'calculator__input';
    input.placeholder = 'Enter something...';
    this.#el.append(input);
    this.#root.append(this.#el);
    input.focus();
  }

  close() {
    this.#el.remove();
  }

}
