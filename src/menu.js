import {Menu} from './core/menu'
import {BackgroundModule} from './modules/background.module'
import {ClicksModule} from './modules/clicks.module'
import {ShapeModule} from './modules/shape.module'
import {RandomSoundModule} from './modules/sound.module'
import {CustomMessage} from './modules/message.module'


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
            sound: new RandomSoundModule('sound', 'Случайный звук'),
            message: new CustomMessage ('message', 'Кастомное сообщение')
        }
    }
    render(){
        const arrModules = Object.values(this.#modules)
        
        document.body.addEventListener('contextmenu',(event)=>{
            event.preventDefault()
            this.menuClick(event)
            this.add(arrModules)
            this.open()

        })

        this.#menu.addEventListener('click',(event)=>{
            event.preventDefault()
            const moduleType = event.target.getAttribute('data-type')
            this.#modules[moduleType].trigger()
            this.close()
        })
        
        
    }
    open(){
        this.#menu.classList.add('open')
    }
    close() {
        this.#menu.classList.remove('open')
    }
    
    add(arr) {
        arr.forEach(item=>{
            const liElem = document.createElement('li')
            liElem.innerHTML = item.toHTML()
            this.#menu.append(liElem)
        })
        arr.length = 0
    }
    menuClick(event){
        let topValue = 0
            let leftValue = 0
    
            const mouseLeft = event.clientX
            const mouseTop = event.clientY
    
            const {width, height} = document.body.getBoundingClientRect()
            const menuWidth = this.#menu.clientWidth
            const menuHeight = this.#menu.clientHeight
    
            if (mouseLeft + menuWidth > width) leftValue = width - menuWidth
            else leftValue = mouseLeft
    
            if (mouseTop + menuHeight > height) topValue = mouseTop - menuHeight
            else topValue = mouseTop
    
            this.#menu.style.top = `${topValue}px`
            this.#menu.style.left = `${leftValue}px`
        }

}

