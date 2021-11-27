import {Module} from '../core/module'
import {random} from '../utils'

const colors = ['#7CAD44FF', '#AD7544FF', '#c922e6', '#22dfe6', '#C922E6FF']

export class BackgroundModule extends Module {
    constructor() {
        super('BackgroundModule', 'Background switcher');
        this.body = document.querySelector('body')

    }

    trigger() {
        this.setColor(this.body)
    }

    setColor(element) {
        const color = this.getRandomColor()
        element.style.backgroundColor = color
       element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    }
     getRandomColor() {
         let randomNumber = random(1,colors.length)

         const index = Math.floor(randomNumber)
         console.log(index)
        return colors[index]
    }

}
