import { Module } from '../core/module';
import * as Utils from '../utils';

export class FiguresModule extends Module {
   #arrFigures

   constructor(type, text) {
      super(type, text);
      this.#arrFigures = [];
   }

   trigger() {
      this.#createFigure();
      this.#showRandomFigures()
   }

   #showRandomFigures() {
      const figure = this.#getRandomFigures();

      const size = Utils.random(0, 400);
      const { width, height } = document.body.getBoundingClientRect();

      figure.style.width = `${size}px`;
      figure.style.height = `${size}px`;
      figure.style.top = `${Utils.random(0, height - size)}px`;
      figure.style.left = `${Utils.random(0, width - size)}px`;
      figure.style.position = 'absolute';
      figure.style.backgroundColor = Utils.randomColor();

      document.body.prepend(figure);
   }

   #createFigure() {
      const square = this.#createDOMElements('div', 'square');
      const rectangle = this.#createDOMElements('div', 'rectangle');
      const circle = this.#createDOMElements('div', 'circle');
      const oval = this.#createDOMElements('div', 'oval');
      const triangleUp = this.#createDOMElements('div', 'triangle-up');
      const triangleDown = this.#createDOMElements('div', 'triangle-down');
      const triangleLeft = this.#createDOMElements('div', 'triangle-left');
      const triangleRight = this.#createDOMElements('div', 'triangle-right');
      const parallelogram = this.#createDOMElements('div', 'parallelogram');
      const trapezoid = this.#createDOMElements('div', 'trapezoid');

      this.#arrFigures.push(
         square, rectangle, circle, oval, triangleUp, triangleDown,
         triangleLeft, triangleRight, parallelogram, trapezoid
      );
   }

   #getRandomFigures() {
      return this.#arrFigures[Utils.random(0, this.#arrFigures.length - 1)];
   }

   #createDOMElements(tag, clas) {
      const nameTag = document.createElement(tag);
      nameTag.className = clas;
      return nameTag;
   }
}