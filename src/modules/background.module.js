// import {Module} from '../core/module'

// export class BackgroundModule extends Module {

// }

export const foo = () => {
  class Something {
    constructor(selector) {
      this.el = document.querySelector(selector);
    }
    show() {
      this.el.style.display = 'block';
    }
    hide() {
      this.el.style.display = 'none';
    }
  }
  class SomethingS extends Something {
    constructor(options) {
      super(options.selector);
      this.el.style.width = this.el.style.height = options.size + 'px';
      this.el.style.background = options.background;
    }
  }
  const something = new SomethingS({
    selector: '#something',
    size: 100,
    background: 'green',
  });
};