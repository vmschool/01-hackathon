import {Module} from '../core/module'
import { random } from 'core-js/core/number'

export class RandomFigure extends Module {
    constructor(type, text){
        super(type, text)
    }
    trigger(){

            const block = document.createElement('div')
            const figure = document.createElement('div')
            const check = document.querySelector('.figure-block')
            const figures = figure.style
            const blocks = block.style
        
            check ? check.remove(): null
        
            block.className = 'figure-block'
            blocks.top = `${random(0, 40)}%`;
            blocks.left = `${random(0, 70)}%`;
        
            figure.className = 'figure'
            figures.width = `${random(50, 300)}px`
            figures.height = `${random(50, 200)}px`
            figures.borderRadius = `${random(10, 50)}%`;
            block.append(figure)
            
            document.body.append(block)
        
            setTimeout(() => {
                figure.remove()
            },3000)

    }
}