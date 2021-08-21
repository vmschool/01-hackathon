import { random } from "../utils"
import { Module } from "../core/module"

export class ShapeModule extends Module {
  options = {
    height: [50, 200],
    width: [50, 200],
    radius: [5, 25],
    rotate: [-45, 45],
    sat: [60, 80],
    br: [40, 60],
  }

  createFig = () => {
    const fig = document.createElement("div")
    fig.className = "figure"

    const figHeight = random(...this.options.height)
    const figWidth = random(...this.options.width)
    const figRadius = random(...this.options.radius)
    const figRotate = random(...this.options.rotate)

    const { height, width } = document.body.getBoundingClientRect()
    let x = random(0, width - figWidth)
    let y = random(0, height - figHeight)

    fig.style.top = y + "px"
    fig.style.left = x + "px"

    fig.style.height = figHeight + "px"
    fig.style.width = figWidth + "px"
    fig.style.borderRadius = figRadius + "px"
    fig.style.transform = `rotate(${figRotate}deg)`
    fig.style.margin = 0
    fig.style.position = "absolute"

    fig.style.background = `hsl(
      ${random(0, 360)}, 
      ${random(...this.options.sat)}%, 
      ${random(...this.options.br)}%)
      `

    return fig
  }

  deleteFig(el) {
    el.remove()
  }

  trigger() {
    if (document.querySelector(".figure")) {
      this.deleteFig(document.querySelector(".figure"))
    }
    
    const fig = this.createFig()
    document.body.append(fig)
  }
}
