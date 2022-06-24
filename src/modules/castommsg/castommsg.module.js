import {Module} from '../core/module'


export class CastomMsg extends Module {
    constructor(type, text){
        super(type, text)
    }
    trigger(){

        const block = document.createElement('div')
        const message = document.createElement('p')
        const check = document.querySelector('.timerModal')
    
        check ? check.remove(): null
        
        block.className = 'timerModal'
    
        message.textContent = 'THIT IS HACATHON!!!'
        block.append(text)
    
        document.body.append(block)
    
        setTimeout(() => {
            modal.remove()
        },3000)

    }
}