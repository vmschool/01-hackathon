import menu from "../app";
import { Module } from "../core/module";

class ShapeModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  shape() {
    const canvas = document.getElementById("Canvas");
    const context = canvas.getContext("2d");
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, 400, 400);
    var randomShape = Math.floor(Math.random() * 3 + 1);
    if (randomShape == 1) {
      context.beginPath();
      context.rect(25, 50, 200, 100);
      context.fillStyle = "#00FF00";
      context.fill();
      context.lineWidth = 7;
      context.strokeStyle = "#000";
      context.stroke();
    } else if (randomShape == 2) {
      context.beginPath();
      context.arc(200, 200, 69, 0, 2 * Math.PI, false);
      context.fillStyle = "#FF0000";
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = "#000";
      context.stroke();
    } else if (randomShape == 3) {
      context.beginPath();
      context.arc(276, 255, 70, 0, Math.PI, false);
      context.closePath();
      context.lineWidth = 5;
      context.fillStyle = "#0000FF";
      context.fill();
      context.strokeStyle = "#000";
      context.stroke();
    }
  }

  drawPoints() {
    const SVG_NS = "http://www.w3.org/2000/svg";
    let R = 50;
    let c = { x: 50, y: 50 };

    let g = document.createElementNS(SVG_NS, "g");

    for (let i = 0; i < 1500; i++) {
      let a = Math.random() * 2 * Math.PI; // angle
      let r = Math.sqrt(~~(Math.random() * R * R)); // distance fron the center of the main circle
      // x and y coordinates of the particle
      let x = c.x + r * Math.cos(a);
      let y = c.y + r * Math.sin(a);
      // draw a particle (circle) and append it to the previously created g element.
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
    //append the g element to the svg
    // svg.appendChild(g);
  }
  #trigger = () => {
    this.drawPoints();
  };
  addItemInMenuList() {
    menu.add(`Случайная фигура`, this.#trigger.bind(this));
  }
}

export const shapeModule = new ShapeModule("type", "text");
