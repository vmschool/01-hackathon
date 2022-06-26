import { Module } from '../core/module'
import { randomColor } from '../utils'

export class BackgroundModule extends Module {
    constructor(type, text) {
        super(type, text)
    }

    trigger(){
        document.body.style.backgroundColor = `${randomColor()}`
   }
}