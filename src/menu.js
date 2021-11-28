import {Menu} from './core/menu'
import {BackgroundModule} from './modules/background.module'
import {ClicksModule} from './modules/clicks.module'
import {ShapeModule} from './modules/shape.module'
import {Module} from './core/module'


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
        }
    }
    render(){
        const arrModules = Object.values(this.#modules)
        
        document.body.addEventListener('contextmenu',(event)=>{
            event.preventDefault()
            this.menuClick(event)
            arrModules.forEach(item => {this.add(item)})
            arrModules.length = 0
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
    
    add(item) {
        if(item instanceof Module){
            const liElem = document.createElement('li')
            liElem.innerHTML = item.toHTML()
            this.#menu.append(liElem)
        }
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

