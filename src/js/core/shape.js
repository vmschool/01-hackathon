export default class Shape {
  constructor(border, background, borderRadius, top, left, width = 0, height = 0) {
    this.el = document.createElement('div');
    this.el.className = 'position-absolute';

    this.el.style.background = background;
    this.el.style.border = border;
    this.el.style.borderRadius = borderRadius;
    this.el.style.top = top;
    this.el.style.left = left;
    this.el.style.width = width;
    this.el.style.height = height;
  }
}
