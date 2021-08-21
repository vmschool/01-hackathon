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
    this.#input.placeholder = 'Enter expression and press Enter';

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
    this.#el.append(this.#input);
    this.#root.append(this.#el);
    this.#input.focus();
    this.getData();
  }

  calculateData(symbol, x, y) {
    let result = 0
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
    return result;
  }

  getData() {
    this.#input.addEventListener('change', (event) => {
      const { target } = event;
      const symbols = ['+', '-', '/', '*', '**'];
      const currentExpression = target.value;
      const symbol = currentExpression.match(/\D+/)
        ? currentExpression.match(/\D+/)[0]
        : '';

      if (!symbols.includes(symbol)) return;

      const currentValues = currentExpression.split(symbol);
      let [a, b] = currentValues;
      a = Number(a);
      b = Number(b);
      target.value = this.calculateData(symbol, a, b);
      console.log(currentValues)
    });
  }

  close() {
    this.#el.remove();
  }

}
