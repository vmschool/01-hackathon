import menu from "../app";
import { Module } from "../core/module";

export class FigureModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  drawPoints() {
    const SVG_NS = "http://www.w3.org/2000/svg";
    let R = 50;
    let c = { x: 50, y: 50 };

    let g = document.createElementNS(SVG_NS, "g");

    for (let i = 0; i < 1500; i++) {
      let a = Math.random() * 2 * Math.PI;
      let r = Math.sqrt(~~(Math.random() * R * R));

      let x = c.x + r * Math.cos(a);
      let y = c.y + r * Math.sin(a);

      drawCircle({ cx: x, cy: y, r: 1 }, g);
    }

    function drawCircle(o, parent) {
      var circle = document.createElementNS(SVG_NS, "circle");
      for (var name in o) {
        if (o.hasOwnProperty(name)) {
          circle.setAttributeNS(null, name, o[name]);
        }
      }
      parent.appendChild(circle);
      return circle;
    }

    svg.appendChild(g);
    setInterval(() => (svg.innerHTML = ""), 5000);
  }

  #trigger() {
    this.drawPoints();
    this.toHTML();
  }

  addItemInMenuList() {
    return {
      text: this.toHTML.bind(this),
      trigger: this.#trigger.bind(this),
    };
  }

  toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`;
  }
}
