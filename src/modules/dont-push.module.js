import { Module } from '../core/module'

import moanSound from '../assets/sounds/moan.mp3'
import faceImg from  '../assets/images/face.png'

export class DontPush extends Module {
    constructor() {
        super("dont-push", "НЕ НАЖИМАТЬ!");
        this.divElement = document.createElement('div')
        this.img = document.createElement('img')
        this.img.src = faceImg
        this.moan = new Audio(moanSound)
        this.moan.volume = 0.4
        this.count = 0
    }

    trigger() {
        this.count++

        this.divElement.style.fontSize = '2rem'
        this.divElement.style.textAlign = 'center'
        this.img.style.width = '40%'
        this.img.style.display = 'block'
        this.img.style.margin = '0 auto'

        if (this.count === 1) {
            this.divElement.textContent = 'Перестань нажимать!'
            document.body.prepend(this.divElement)
        } else if (this.count === 2) {
            this.divElement.textContent = 'Я сказала хватит!'
            document.body.prepend(this.divElement)
        } else if (this.count === 3) {
            this.divElement.textContent = 'Ну, я тебя предупреждала...'
            document.body.prepend(this.divElement)
        } else {
            this.count = 0
            this.divElement.remove()
            this.moan.play()
            document.body.prepend(this.img)

            setTimeout(( ) => {
                this.img.remove()
            }, 800)
        }
    }
}