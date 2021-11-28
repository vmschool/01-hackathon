import {Menu} from './core/menu'
import {BackgroundModule} from './modules/background.module'
import {ClicksModule} from './modules/clicks.module'
import {ShapeModule} from './modules/shape.module'
import {RandomSoundModule} from './modules/sound.module'
import * as Utils from './utils'

export class ContextMenu extends Menu {
    #menu
    #modules
    constructor(){
        super('#menu')
        this.#menu = document.querySelector('#menu')
        this.#modules = {
            background: new BackgroundModule('background', 'Поменять цвет'),
            clicks: new ClicksModule('clicks', 'Считать клики'),
            shape: new ShapeModule('shape', 'Создать фигуру'),
            sound: new RandomSoundModule('sound', 'Случайный звук')
        }
    }
    render(){
        const ulElem = document.querySelector('ul')
        
        const arrModules = Object.values(this.#modules)
        arrModules.forEach(item =>{
            const liElem = document.createElement('li')
            liElem.innerHTML = item.toHTML()
            ulElem.append(liElem)
        })
        
        document.body.addEventListener('contextmenu',(event)=>{
            event.preventDefault()
            this.open()
        })

        document.body.addEventListener('click',(event)=>{
            event.preventDefault
            this.close()
        })
        this.#menu.addEventListener('click',(event)=>{
            event.preventDefault()
            const moduleType = event.target.getAttribute('data-type')
            this.#modules[moduleType].trigger()
            this.close()
        })
        Utils.menuClick()
        console.log(document.body.innerHTML)
    }
    open(){
        this.#menu.style.display = 'block';
        console.log('open')
    }
    close() {
        this.#menu.style.display = 'none';
        console.log('close')
    }
    
    add() {

    }

}