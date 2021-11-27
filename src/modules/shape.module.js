import {Module} from '../core/module'
import {random} from '../utils'

export class ShapeModule extends Module {

  constructor(){
    super(ShapeModule, 'ShapeModule')
    this.width = 100
    this.height = 100
    this.color = 'red'
  }

  render(){
    const bodyHTML = document.querySelector('body')
    const figureRootDiv = document.createElement('div')
    figureRootDiv.style.width = this.width + 'px'
    figureRootDiv.style.height = this.height + 'px'
    figureRootDiv.style.backgroundColor = this.color
    bodyHTML.append(figureRootDiv)
  }
}