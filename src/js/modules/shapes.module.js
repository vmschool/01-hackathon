import Module from '../core/module';
import { getRandomStringRGB, random } from '../utils';
import Shape from "../core/shape";

export default class ShapesModule extends Module {
  constructor(text) {
    super('shape', text);
  }

  trigger() {

    const color = getRandomStringRGB()
    const background = color
    const border = `${random(7, 170)}px solid ${color}`
    const borderRadius = `${random(5, 50)}%`
    const top = `${random(0, 80)}%`
    const left = `${random(0, 80)}%`
    const shape = new Shape(border, background, borderRadius, top, left)

    document.body.append(shape.el)


    setTimeout(() => shape.el.remove(), 1500)

  }
}

