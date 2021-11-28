import { Module } from '../core/module';
import * as Utils from '../utils';

export class FiguresModule extends Module {
   #arrFigures

   constructor() {
      this.#arrFigures = [];
   }

   trigger() {
      this.#createFigure();
      const timer = setInterval(() => this.#showRandomFigures(), 300);
      setInterval(this.#killFigure(), 600);
      setTimeout(() => clearInterval(timer), 30000);
   }
   trigger();

   #showRandomFigures() {
      const figure = this.#getRandomFigures();

      const color = this.#getRandomColor();

      const size = this.#getRandomNumber(0, 400);
      const { width, height } = document.body.getBoundingClientRect();
      const x = this.#getRandomNumber(0, width - size);
      const y = this.#getRandomNumber(0, height - size);

      figure.style.width = `${size}px`;
      figure.style.height = `${size}px`;
      figure.style.top = `${y}px`;
      figure.style.left = `${x}px`;
      figure.style.position = 'absolute';
      figure.style.backgroundColor = color;

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
      return this.#arrFigures[Math.floor(Math.random() * this.#arrFigures.length)];
   }

   #killFigure() {
      const div = document.querySelector('div');
      if (div) div.remove();
   }

   #getRandomNumber(min, max) {
      return Math.round(Math.random() * (max - min) + min);
   }

   #getRandomColor() {
      const colors = ['#FB9A05', '#BBFB05', '#05FB09', '#05FBD0', '#05AAFB', '#C705FB', '#FB0568', '#F7F9D6', '#16D9E3', '#f2CB07', '#F20726', '#2C5364', '#FFD200', '#44A08D', '#6F0000', '#200122'];
      return colors[Math.floor(Math.random() * colors.length)];
   }

   #createDOMElements(tag, clas) {
      const nameTag = document.createElement(tag);
      nameTag.className = clas;
      return nameTag;
   }
}

const figuresModule = new FiguresModule();