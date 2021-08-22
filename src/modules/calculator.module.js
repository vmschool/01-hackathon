import { Module } from '../core/module';

export class CalculatorModule extends Module {
  #root;
  #el;
  #input;

  constructor(type, text) {
    super(type, text);
    this.#root = document.body;
    this.#el = document.createElement('div');
    this.#el.dataset.type = this.type;
    this.#el.className = `module-${ this.type }`;

    this.#input = document.createElement('input');
    this.#input.dataset.type = this.type;
    this.#input.className = 'calculator__input';
    this.#input.placeholder = 'Enter an expression with two values and press Enter';

    this.destroy(this.#el, this.type);
  }


  trigger() {
    this.#el.append(this.#input);
    this.#root.append(this.#el);
    this.#input.focus();
    this.getData();
  }

  calculateData(symbol, x, y) {
    let result = 0;
    switch (symbol) {
      case '+':
        result = x + y;
        break;
      case '-':
        result = x - y;
        break;
      case '*':
        result = x * y;
        break;
      case '/':
        result = x / y;
        break;
      case '**':
        result = x ** y;
        break;
      default:
        result = 0;
    }
    return Number(result.toFixed(2));
  }

  getData() {
    this.#input.addEventListener('change', (event) => {
      const { target } = event;
      const symbols = ['+', '-', '/', '*', '**'];
      const currentExpression = target.value;
      const symbol = currentExpression.match(/[^\d\.]+/)[0];

      if (!symbols.includes(symbol)) return;

      const currentValues = currentExpression.split(symbol);
      let [a, b] = currentValues;
      a = Number(a);
      b = Number(b);
      target.value = this.calculateData(symbol, a, b);
    });
  }

  close() {
    this.#el.remove();
  }
}
