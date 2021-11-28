import {Menu} from './core/menu'
import { Module } from './core/module';

export class ContextMenu extends Menu {
    
    constructor(selector){
        super(selector);
        // this.posX = pageX
        // this.posY = pageY
    }

    open(event){
        this.el.classList.add('open');
        // event.target.style.top = this.posY;
        // event.target.style.left = this.posX;
    }

    close() {
        this.el.classList.remove('open');
    }

    add (module) {
        if(module instanceof Module){
            const moduleHTML = module.toHTML()
            this.el.append(moduleHTML);
        }
       
    }

    run() {
        document.body.addEventListener('contextmenu', (event) => {
            event.preventDefault()
            this.el.style.top = `${event.offsetY}px`
            this.el.style.left = `${event.offsetX + 10}px`
            this.open()
            console.log(`event.target`, event.offsetY)
        })
    }
}